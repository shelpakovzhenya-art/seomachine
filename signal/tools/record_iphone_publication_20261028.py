from pathlib import Path
import subprocess,json,hashlib
S=Path(__file__).resolve().parents[1];M=S.parent
R=Path('C:/Users/della/orca/projects/signal/reports/seo-implementation-20261026')
assert json.loads((R/'iphoneguides-production-check.json').read_text(encoding='utf-8'))['passed']
assert json.loads((R/'iphoneguides-production-gates.json').read_text(encoding='utf-8'))['passed']
p=S/'drafts/2026-10-28-iphone-editorial-pack.json';d=json.loads(p.read_text(encoding='utf-8'))
old={x['slug']:x for x in json.loads((R/'raw/editorial-current-20261028.json').read_text(encoding='utf-8'))['articles']}
for row in d['articles']:
    assert row['status'] in ['reviewed-unpublished','published-production']
    draft=Path(row['draft']);txt=draft.read_text(encoding='utf-8')
    assert any('status: "'+s+'"' in txt for s in ['reviewed-unpublished','published-production'])
    txt=txt.replace('status: "reviewed-unpublished"','status: "published-production"')
    parts=txt.split('---\n',2);assert len(parts)==3
    assert parts[2].strip()==row['patch']['content'].strip()
    for key in ['tags','keywords']:
        parts[1]='\n'.join(line for line in parts[1].splitlines() if not line.startswith(key+':'))+'\n'
        parts[1]+=key+': '+json.dumps(old[row['slug']].get(key,[]),ensure_ascii=False)+'\n'
    txt='---\n'.join(parts)
    published=S/'published'/(row['slug']+'.md')
    tracked=subprocess.run(['git','ls-files','--error-unmatch','signal/published/'+row['slug']+'.md'],cwd=M,capture_output=True).returncode==0
    backup=R/'raw'/('machine-published-before-'+row['slug']+'-20261028.md')
    if backup.exists():
        previous=backup.read_text(encoding='utf-8')
        assert published.exists()
        current=published.read_text(encoding='utf-8')
        assert current==previous or current.split('---\n',2)[-1].strip()==row['patch']['content'].strip(),'Publication recovery drift'
    elif published.exists():
        previous=published.read_text(encoding='utf-8')
        if tracked:
            committed=subprocess.check_output(['git','show','HEAD:signal/published/'+row['slug']+'.md'],cwd=M).decode('utf-8')
            assert committed.replace('\r\n','\n')==previous,'Published draft drift'
        assert 'slug: "/blog/'+row['slug']+'"' in previous
        assert 'date: "'+row['originalPublicationDate']+'"' in previous
        assert 'title: '+json.dumps(old[row['slug']]['title'],ensure_ascii=False) in previous or row['status']=='published-production'
        backup.write_text(previous,encoding='utf-8')
    else:
        assert not tracked,'Tracked deletion requires review'
        previous=None
    if 'previousMachinePublishedTracked' not in row:
        row.update({'previousMachinePublishedTracked':tracked,'previousMachinePublishedExisted':previous is not None,'previousMachinePublishedSha256':hashlib.sha256(previous.encode()).hexdigest() if previous is not None else None})
    draft.write_text(txt,encoding='utf-8');published.write_text(txt,encoding='utf-8')
    row.update({'status':'published-production','publishedAt':'2026-10-28T11:02:24Z','sourceCommit':'7e682acde9ed0db0951a01b1b6dfd5579e0f9c6e','productionProof':'iphoneguides-production-check.json'})
    temporary=p.with_suffix('.pending.json');temporary.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8');temporary.replace(p)
p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
brief=S/'research/2026-10-28-iphone-editorial-review.md';t=brief.read_text(encoding='utf-8')
t=t.replace('Публикацияпокаожидаетзеркалирования/сборки/кандидата/productionприёмки.','Опубликовано28.10.2026в14:02:24МСК,source7e682ac. Production3/3полныйHTML/schema/metadata/даты/ссылки/sitemappass;общиеcommerce/CSS/feedspass. СтарыйsitemaplastmodвNginxcacheобновилсяштатно;послеповторапроверкапрошла. ПротоколIPHONE_GUIDES_RELEASE_20261028.mdвSignalworkspace. Другие217статей/3решениянеизменены.')
brief.write_text(t,encoding='utf-8')
print('Three published Machine files/statuses synchronized with verified production')
