# Eleven theme recipes

Adapt these visual recipes to the host app. Executable references are in `assets/starter/`; names express inspiration, not exact third-party replicas.

| ID | Palette and typography | Distinctive structure |
| --- | --- | --- |
| `botanical` | Cream `#f8f6ef`, olive `#4c5b3b`, Playfair Display + DM Sans | Quiet spacing, botanical linework, overlapping paper previews, three-column shelf. |
| `editorial` | Off-white `#faf9f6`, near-black `#202321`, red-brown `#a13d2d`, serif headlines | Double-rule masthead, oversized type, square controls, numbered two-column gallery, single framed hero. |
| `playroom` | Warm paper, lavender, pale yellow, mint; Fredoka + Nunito | Rounded cards, reversed desktop hero, dotted color block, playful stamp, pill controls. |
| `midnight` | Ink `#181e24`, green-charcoal, gold `#d9ba7c`; serif | Spacious dark gallery, gold controls, colorful paper imagery, two columns. |
| `retro` | Cream `#faf6e9`, yellow `#ffd21c`, pink `#ffa9ac`, blue `#a8e1e9`, mint `#b5efc8`; Fredoka + Nunito | 2–3px black outlines, 4px hard shadows, 12–18px cards, pills, pastel blocks, visible pressed state. |
| `commandline` | Black `#000`, panels `#101010`, border `#343434`, text `#f0f0f0`, muted `#a8a8a8`; Cascadia Code/Consolas/monospace | Prompt strip, flat rectangular controls, fine borders, restrained density. No green, CRT glow, scan lines or forced grayscale photos. |
| `vscode` | Editor `#1e1e1e`, panel `#252526`, blue `#3794ff`, peach `#ce9178`, teal `#4ec9b0`; monospace headings | Slim activity rail, file tab, preview frame, syntax-like category labels. Hide decorative rail on mobile. |
| `excel` | Workbook `#f3f6f3`, white cells, green `#107c41`, grid `#d0d9d1`; Manrope/DM Sans | Formula-style breadcrumb, tab underline, cell grid, column letters, numbered rows. Preserve real table semantics. |
| `canva` | Canvas `#f5f3fc`, white cards, purple `#7d2ae8`, cyan, soft pink; Manrope | Cyan-purple banner, rounded canvas, gentle shadows and layered previews. Maintain text contrast. |
| `figma` | Canvas `#f2f2f3`, white frames, purple `#7850d0`, dotted grid; Manrope | Selection outlines, small handles, component labels and thin rail. Handles are decorative, not resize controls. |
| `photoshop` | Charcoal `#242424`, panels `#303030`, borders `#454545`, blue `#72b6ff`; Manrope | Document tab, activity rail, checkerboard behind artwork, layer labels. Overlays must not obscure real controls. |

## Token mapping

The reference baseline uses `--paper`, `--ink`, `--line`, `--olive`, `--serif`, `--sans`. Workspace themes add `--ws-panel`, `--ws-top`, `--ws-soft`, `--ws-muted`, `--ws-accent`, `--ws-on-accent`, `--ws-radius`, `--ws-shadow`. Retro uses `--retro-*`, `--retro-border`, `--hard-shadow`, `--card-radius`, `--control-radius`.

Translate these into the app's semantic tokens. Avoid scattering hard-coded colors through business components. Inputs, dialogs, tooltips, cards and focus rings should resolve through the selected theme.

Do not copy another project's products, screenshots, checkout URLs or customer information. Bundled SVGs are fictional original illustrations. Replace them only with authorized assets. Google Fonts are optional network-loaded typography; retain system fallbacks and the host app's font strategy.
