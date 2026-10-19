# Reference docs mockups

Design mockups for the java-repeat reference docs, built with the [java-repeat design system](../../design-system/README.md). These are design sources, not Hugo content; Hugo ignores this folder.

Live canvas: https://claude.ai/artifact/2V6PAAtPLnkGqVdkVRrA6V

| File | Page | Hugo path |
|---|---|---|
| `Main.dc.html` | Docs home | `/` |
| `Sitemap.dc.html` | Sitemap of every planned page | — |
| `GettingStarted.dc.html` | Getting started | `/getting-started/` |
| `ApiRepeat.dc.html` | API reference (`Repeat` and `IndexedAction`) | `/api/` |
| `CheckedExceptions.dc.html` | Guide: Checked exceptions | `/guides/checked-exceptions/` |
| `Migration.dc.html` | Guide: Migrating from 0.x | `/guides/migrating-from-0x/` |
| `Search.dc.html` | Search results | `/search/` |

Releases and Javadoc are external links (GitHub releases, javadoc.io), not pages.

`canvas.json` is the canvas layout. The `.dc.html` files are Design Component sources: they need the canvas runtime (`support.js`) to render, and the wordmark is referenced as an uploaded canvas asset (`/_blob/...`); the same file is `design-system/logos/wordmark.svg`.
