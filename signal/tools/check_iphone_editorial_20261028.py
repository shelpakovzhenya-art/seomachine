from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlsplit
import json, re, hashlib, requests, csv
S=Path(__file__).resolve().parents[1];R=Path('C:/Users/della/orca/projects/signal/reports/seo-implementation-20261026')
path=S/'drafts/2026-10-28-iphone-editorial-pack.json';d=json.loads(path.read_text(encoding='utf-8'))
for row in d['articles']:
    if row['slug']=='iphone-s-esim-ili-nano-sim-esim':
        old='[проверка блокировки оператора](https://support.apple.com/en-us/109316).'
        new='[проверка блокировки оператора](https://support.apple.com/en-us/109316), [две линии и мобильные данные](https://support.apple.com/en-us/109317), [eSIM в поездках](https://support.apple.com/en-us/118227).'
        if old in row['patch']['content']:
            row['patch']['content']=row['patch']['content'].replace(old,new)
            draft=Path(row['draft']);txt=draft.read_text(encoding='utf-8');assert txt.count(old)==1;draft.write_text(txt.replace(old,new),encoding='utf-8')
    row['afterContentSha256']=hashlib.sha256(row['patch']['content'].rstrip('\n').encode()).hexdigest()
    row['sources']=re.findall(r'\]\((https://(?:support\.apple\.com|www\.apple\.com)/[^)]+)\)',row['patch']['content'])
    row['internalLinks']=re.findall(r'\]\((/[^)]+)\)',row['patch']['content'])
    assert len(row['sources'])>=4 and len(row['internalLinks'])>=4
    assert len(row['patch']['metaTitle'])<=65 and 120<=len(row['patch']['metaDescription'])<=175
    assert row['patch']['content'].count('Проверено 28.10.2026')==1
    assert row['originalPublicationDate'] in Path(row['draft']).read_text(encoding='utf-8')
    assert not any(x in row['patch']['content'] for x in ['/catalog/smartfony/apple-smartfony','iphone-17-air','PRODUCT'])
urls=sorted({u for row in d['articles'] for u in row['sources']+['https://signalmsk.com'+x for x in row['internalLinks']]})
def check(url):
    r=requests.get(url,timeout=45)
    return {'url':url,'status':r.status_code,'finalUrl':r.url,'sameRole':not('/iphone-17/specs/' in url and '/iphone-17/specs/' not in r.url)}
with ThreadPoolExecutor(max_workers=3) as pool: links=list(pool.map(check,urls))
assert all(x['status']==200 and x['sameRole'] for x in links),[x for x in links if x['status']!=200 or not x['sameRole']]
out={'checkedAt':'2026-10-28','articles':3,'linksChecked':len(links),'passed':True,'links':links,'qualityChecks':['Apple model capacities','conditional memory arithmetic','no operator/region inferred from Dual SIM','original publication dates preserved','no URLs changed','all category/product/source links200'],'metadataLengths':{r['slug']:{'title':len(r['patch']['metaTitle']),'description':len(r['patch']['metaDescription'])} for r in d['articles']}}
path.write_text(json.dumps(d,ensure_ascii=False,indent=2),encoding='utf-8')
(S/'drafts/2026-10-28-iphone-editorial-review.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'passed':True,'articles':3,'links':len(links),'metadataLengths':out['metadataLengths']}))
