"""Fetch the Women Count USA shared Airtable views and bases into a raw directory.

Usage: python3 fetch_wcusa.py <raw_dir>

Raw files contain names, photo links, narratives and source links and must never
be committed. build_dataset.py turns them into the de-identified dataset in
docs/data/. Share links come from https://womencountusa.org/the-databases and
rotate over time; update SHARES when they do.
"""
import re, sys, json, gzip, codecs, pathlib, urllib.request, http.cookiejar

SHARES = {
    # label: share path (bare share id for single-view shares, app/share for base shares)
    "1950-1999": "shrEg06uutMWb9zcf",
    "2000-2009": "appRvVlPj5DOScgdt/shrGdGJjMuvGkH2tl",
    "2010-2014": "shrUZ8hIy2FDtH5o1",
    "2015": "shrkpu2YEs0hsPZaS",
    "2016": "shrgXbMy3yJpyraN6",
    "2017": "shrMSGPox3r7bvsil",
    "2018": "shrQoIB5CerCSfQP2",
    "2019": "shr0yXAcLgjCgnw3x",
    "2020": "shrMieJidNcstBUJ3",
    "2021": "shrmCMNWakeP457rX",
    "2022": "shr6HrRDxsPuBSqBr",
    "2023": "shrhERKTyJcRbgMeV",
    "2024": "appiYYO2XvT0RInXN/shrQ0MOJtPlAcMTgy",
    "2025": "appvJSVKmBraqwF2b/shrslQFObSPa3SVIa",
    "2026": "appDBLL8ZnycYFBzn/shr1M1lnaV5bN9C4x",
}
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36"


def body(r):
    b = r.read()
    if b[:2] == b"\x1f\x8b":
        b = gzip.decompress(b)
    return b


def fetch(share):
    cj = http.cookiejar.CookieJar()
    op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    page = body(op.open(urllib.request.Request(f"https://airtable.com/{share}", headers={"User-Agent": UA, "Accept-Encoding": "gzip, identity"}))).decode("utf-8", "replace")
    url = codecs.decode(re.search(r'urlWithParams: "([^"]+)"', page).group(1), "unicode_escape")
    url = url.replace("%22allowMsgpackOfResult%22%3Atrue", "%22allowMsgpackOfResult%22%3Afalse")
    app = re.search(r'"applicationId":"(app[A-Za-z0-9]+)"', page)
    hdr = {"User-Agent": UA, "Accept": "application/json", "Accept-Encoding": "gzip, identity", "x-requested-with": "XMLHttpRequest",
           "x-time-zone": "America/New_York", "x-user-locale": "en", "x-airtable-inter-service-client": "webClient", "Referer": f"https://airtable.com/{share}"}
    if app:
        hdr["x-airtable-application-id"] = app.group(1)
    return json.loads(body(op.open(urllib.request.Request("https://airtable.com" + url, headers=hdr))))


if __name__ == "__main__":
    out = pathlib.Path(sys.argv[1])
    out.mkdir(parents=True, exist_ok=True)
    for label, share in SHARES.items():
        (out / f"{label}.json").write_text(json.dumps(fetch(share)))
        print(label, "ok")
