# java-repeat design system

Tokens: [`tokens.json`](tokens.json) (source) and [`tokens.css`](tokens.css) (CSS custom properties). Logo files live in [`logos/`](logos/); see [`logos.md`](logos.md). Live version: https://claude.ai/artifact/SLH4JNxA7nEu2Hhb2R7cK2

java-repeat is a small Java library: Kotlin-style `repeat(n, i -> ...)` with checked exceptions. The identity is a hook-shaped "j" whose tail is an arrow pointing back up — a loop that repeats — set in one orange on ink. Keep everything else quiet so that loop and the code carry the page.

## Content fundamentals

- **Lead with code.** The README opens with a snippet before any prose; do the same. Show the call, then explain it in one line.
- **Plain, short, declarative.** Real copy: "Kotlin-style repetition for Java, with support for checked exceptions." · "As in Kotlin, a zero or negative count does nothing."
- **Name is always lowercase, hyphenated:** `java-repeat`. Never "Java Repeat" or "JavaRepeat". In prose, code-ish identifiers go in `code`.
- Compare against Kotlin rather than describing from scratch (`repeat(n) { i -> ... }` → `repeat(n, i -> ...)`).
- No emoji, no exclamation marks, no marketing adjectives.

## Visual foundations

**Color.** Three brand colors, taken exactly from the logo files: `brand-orange` #F07A1A, `brand-ink` #16181D, `brand-white` #FFFFFF.
- Light theme: `text` on `surface`; dark theme flips to `brand-ink` ground, like `icon.svg` and the social preview.
- Orange is the only hue. Use `accent` for fills (buttons, badges, highlights) with `on-accent` (ink) text — never white on orange (2.8:1).
- Orange *text* (links, inline emphasis) uses `accent-text`, never `brand-orange` on light grounds.
- `accent-tint` for callouts and selected rows. `border` for hairlines; `border-strong` for control outlines.
- Focus: a 2px solid `focus-ring` outline, offset 2px; at least 5.6:1 on every surface.

**Type.** The wordmark is set in a geometric monospaced face (every letter on a fixed advance). Echo it with `display` and `title` in the `mono` family; set running text in `sans` (`heading`, `body`, `small`). Code uses `code`; version tags and Maven coordinates use `label`.

**Spacing and radius.** A 4px base: `space-1` 4 · `space-2` 8 · `space-4` 16 · `space-6` 24 · `space-10` 40. Corners: `radius-sm` for inline code and badges, `radius-md` for buttons and code blocks, `radius-lg` for icon tiles (the favicon's 20-on-100 corner).

**Surfaces.** Flat. Separate with `surface-raised` or a `border` hairline, not shadows or gradients.

## Logo usage

- **On light grounds:** `wordmark.svg` / `mark.svg` (ink letters and dot, orange loop).
- **On `brand-ink` or dark grounds:** `wordmark-white.svg` / `mark-white.svg`.
- **App icon / favicon:** `icon.svg` (square, ink ground) and `favicon.svg` (rounded `radius-lg` tile); PNG fallbacks `icon-512.png`, `apple-touch-icon.png`.
- **Link previews:** `social-preview.png` (1280×640).
- Keep clear space of at least the dot's diameter around the mark. Never recolor the loop, separate the dot from the hook, or set the wordmark in live type.
- The hyphen in the wordmark is orange; it is part of the logo, not a separator to restyle.

## Iconography

The project has no icon set. The mark is the only pictogram; it is not used as a bullet or decoration. If UI icons are needed, use simple 2px-stroke line icons with round caps (matching the mark's rounded stroke ends) in `text` or `text-muted`.
