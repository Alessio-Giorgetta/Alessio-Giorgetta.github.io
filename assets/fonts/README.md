# Self-hosted fonts

Two Adobe superfamily faces, designed to pair, both under the SIL Open Font
License 1.1. Nothing here is fetched from a CDN: the site makes no external
requests at all.

| file | family | axis | size |
|---|---|---|---|
| `serif-roman.woff2` | Source Serif 4 | `wght` 400–600, `opsz` 8–60 | 71 KB |
| `sans-roman.woff2`  | Source Sans 3  | `wght` 400–600 | 24 KB |
| `sans-italic.woff2` | Source Sans 3 Italic | static 400 | 14 KB |

Subset to Latin-1 plus punctuation (serif) and Latin Extended-A plus
punctuation (sans, because every proper name on the site is set in it).
Regenerated from the upstream variable fonts with `fontTools.varLib.instancer`
then `fontTools.subset`, `--flavor=woff2 --with-zopfli`.

Upstream:
- https://github.com/adobe-fonts/source-serif (4.005R)
- https://github.com/adobe-fonts/source-sans (3.052R)

The OFL requires the license to travel with the fonts; both are in this folder.
