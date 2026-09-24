import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { generatedAssetUrls, resolveExportAsset } from './export-assets.mjs';

test('extracts HTML and escaped RSC URLs without trailing escape characters', () => {
  const html = String.raw`<link href="/_next/static/css/site.css"><script>self.__next_f.push([1,"\"/_next/static/css/site.css\",\"/_next/static/media/font.woff2\""])</script><script src="/_next/static/chunks/app/%5Bslug%5D/page.js?v=1"></script>`;
  assert.deepEqual([...generatedAssetUrls(html)], [
    '/_next/static/css/site.css', '/_next/static/media/font.woff2', '/_next/static/chunks/app/[slug]/page.js',
  ]);
});

for (const [platform, paths, root] of [['Linux', path.posix, '/vercel/path0/out'], ['Windows', path.win32, 'D:\\Synoveta\\out']]) {
  test(`${platform}: resolves exported assets inside the output directory`, () => {
    assert.equal(resolveExportAsset(root, '/_next/static/css/site.css', paths), paths.join(root, '_next', 'static', 'css', 'site.css'));
  });
  test(`${platform}: rejects traversal outside output and backslash paths`, () => {
    for (const url of ['/outside.css', '/_next/static/../../../secret', '/_next/static/../../../out-other/file', '/_next/static/..\\..\\secret']) {
      assert.equal(resolveExportAsset(root, url, paths), null);
    }
  });
}
