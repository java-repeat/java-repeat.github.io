# Logos and icons

Files live in [`logos/`](logos/). Inks are fixed (an `<img>` cannot inherit color):

- `wordmark.svg`, `wordmark.png`, `mark.svg` — `brand-ink` #16181D letters and dot, `brand-orange` #F07A1A loop and hyphen. Use on `surface` (light).
- `wordmark-white.svg`, `mark-white.svg` — `brand-white` #FFFFFF letters and dot, orange loop and hyphen. Use on `brand-ink` / dark `surface`.

The wordmark is 492×108; the mark is 100×100. The repo README swaps them with `<picture>` and `prefers-color-scheme`.

## Icons

App and browser icons: the mark on a `brand-ink` #16181D ground with a `brand-white` dot.

- `icon.svg`, `icon-512.png` — square tile, 512×512.
- `favicon.svg` — 100×100 tile with `radius-lg` (20) corners.
- `apple-touch-icon.png` — iOS home-screen icon.

`favicon.ico` sits alongside them in `logos/`.

## Social

`social-preview.svg` / `social-preview.png` (1280×640): the white wordmark centred on `brand-ink`. Use the PNG as the GitHub social preview and Open Graph image.
