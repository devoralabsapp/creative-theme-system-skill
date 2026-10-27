# Design Lab — seven experimental directions

Use when the user selects Index Bureau, Specimen Press, Grid Assembly, Margin Notes, Afterhours FM, Chapter Desk or Mono OS. These studies extend the collection with different composition rules, not just alternate palettes. All new interface copy is English.

## Choose the right resource

- **Working reference:** `assets/starter/lab/` is an original browser-local project workspace. Open `/lab/?theme=<id>` on the hosted demo, or serve `assets/starter/` locally and open `/lab/index.html?theme=<id>`. Seven renderers share the same in-memory project records, filters, query, bookmarks and selection. Refresh intentionally resets project changes. The workspace makes no network writes and does not read the filesystem, play audio or simulate unavailable services.
- **Existing shared catalog:** `assets/starter/avant-theme.css` adapts each direction to the existing product catalog while preserving its real controls and business state. Both views use the same stable theme IDs.
- **Canonical semantic tokens:** `assets/starter/lab/tokens.css` defines canvas, surface, foreground, muted foreground, structural/soft borders, accent/on-accent, focus, radius, shadow, display/body/metadata type and motion. Import only the selected theme's tokens or translate them into the host provider.
- **Original layout examples:** `lab.css` and the named renderers in `lab.js` demonstrate composition. Their generic selectors are isolated to the Lab page. Do not import its global reset, session controller or HTML renderers into a production app wholesale.

## Identity recipes

### Index Bureau — `index-bureau`

An information-dense, monochrome archive. White `#FFFFFF`, ink `#151515`, secondary text `#5E5E5E`, neutral gray working fields. Be Vietnam Pro headlines and IBM Plex Mono metadata. One-pixel ruled cells, square controls and no shadows.

The desktop composition has a narrow record index, a primary reading area and a small collection-summary column. A compact information strip carries actual collection/selection facts; do not invent weather, time, traffic or computer-state widgets. A large uppercase document title contrasts with short metadata fields. The catalog becomes a one-column ledger with image, title and description aligned horizontally. Narrow screens stack the primary content and remove the redundant side index while retaining search and reading actions.

### Specimen Press — `specimen-press`

A post-digital publication archive. Near-white `#F6F6F2`, white paper, black structure and gray object fields. Heavy sans-serif typography mixes a small outlined word with solid display type. Keep outlined text short and redundant to the readable page title.

Treat each project as a publication with explicit Title / Series rows above a large cover. Use equal-width columns, rectangular fields and thin dividers. Alternate one black cover field within a set of neutral covers; do not turn every component into a window. Product metadata should be real, not decorative catalog numbers that imply external identifiers. The specimen table language distinguishes it from the existing acid-yellow Type Foundry theme.

### Grid Assembly — `grid-assembly`

An architectural working plan. Warm white `#F7F5EF`, black rules, a restrained dark red `#A92030` action. Regular-weight large headings, monospace chapter labels, square geometry and no shadows.

Expose a limited construction grid, then place opaque content blocks across it with stepped offsets and deliberate empty cells. The headline, selected project and smaller list occupy different spans. Lines must not run through reading text or form fields. Align offsets to the grid; do not scatter arbitrary floating cards. On narrow screens, preserve a small stepped edge but make every text block a readable single column. This is a spatial composition, not a full-page decorative grid behind all content.

### Margin Notes — `margin-notes`

A tactile editorial desk. Parchment `#F0E9DF`, dark plum ink `#30262B`, a deep plum action `#713346`, and muted apricot/lilac/sage/yellow paper colors. Georgia display text, Be Vietnam Pro body text and short typewriter-like metadata. Thin dark rules and a small hard paper edge.

Use one stacked note as the visual anchor, paired with a quiet editorial introduction. Only the blank paper layers behind it may rotate. Actual reading surfaces, inputs and buttons remain upright. Paper colors are material cues, not status codes. Pair every colored paper with `--lab-on-card`; keep long prose on a solid, high-contrast surface. The lower collection uses flat note cards with generous serif titles. Do not reproduce the reference's quoted prose, stamps or arrangement.

### Afterhours FM — `afterhours-fm`

A late-night creative queue. Near-black `#101010`, charcoal `#1D1D1D`, warm off-white text and bright yellow/orange/teal/lilac cover surfaces. Ink `#101010` is the foreground on all bright covers. Round panels (16–18px), compact lists and a quiet navigation rail.

Use two unequal featured blocks, a short saved list and a dense cover grid. Keep brightness in bounded cover areas so the dark shell provides rest. A bottom selection strip advances between actual project records and opens notes. It is not a fake music player: do not add play, volume, waveform, elapsed time or media claims unless the host truly supports audio. Focus rings on bright covers use dark ink, while focus on the dark shell uses yellow. This differs from Midnight's elegant gold gallery and from a colorful light neo-brutalist page.

### Chapter Desk — `chapter-desk`

A warm reading workspace. Cream `#F4E9D5`, pale paper `#FFF5E2`, dark olive-brown ink `#29271F`, burnt-orange action `#A34018` and a small ochre header. Sans-serif headings and compact monospace annotations. Thin outlines, square controls and no shadows.

Use a narrow reading rail, book-shaped objects beside short descriptions, explicit Read preview actions and a continue-reading strip. Book covers are original CSS graphics and sample titles, not downloaded copyrighted book jackets. On phones, the rail becomes a horizontal filter row. Keep text at reading sizes; compact metadata must not become miniature body copy. Do not invent page progress, audiobook playback or downloads. Orange buttons use white text only on the supplied dark orange pair.

### Mono OS — `mono-os`

A grayscale desktop with white window furniture. Gray `#D9D9D9`, white panels, ink `#111111`, secondary text `#555555`, 1px rules, 7px panel corners and a shallow `2px 3px 0` ink edge. IBM Plex Mono is the main face.

Arrange a small index window, a folder collection, a selected note and a truthful session-information strip. White title bars and gray desktop space distinguish it from SẮC / 01's black title bars, red accents and square windows. Folder objects must open real sample notes. No fake copy-progress bars, storage usage, chat presence or nonfunctional window-close glyphs. A short decorative divider is sufficient; real actions use labeled native buttons. Reflow windows into one column on phones; never hide overflowing window content to imitate a desktop.

## Apply to an existing app

Identify the host's registry/provider, theme selectors, content density and actual actions. Extend those mechanisms; do not install a second provider or replace the product with the Lab. Preserve the current default, URLs, localization, search, filters, sorting, form handling and data persistence. The Lab's English sample copy does not authorize translating an existing app's content.

Keep theme IDs stable. Map semantic tokens to the host's equivalents. Use each recipe's structural relationships where appropriate: a reading rail is useful only when the app has that navigation; a catalog can express Index Bureau through horizontal records without adding a fictitious archive sidebar.

Reading text should normally be 16px with comfortable line height; compact UI labels can be 13–14px and short metadata 11–12px. Inputs remain 16px on phones. Controls have at least 44px effective targets. Dialogs use opaque theme surfaces, visible close/cancel, Escape dismissal, focus containment and return focus. Invalid input combines text, `aria-invalid` and a border, not color alone. Preserve the host's stronger accessibility behavior.

Respect reduced motion. The reference has no looping animation, fake loading sequence or automatically changing theme. Optional fonts come from Google Fonts with system fallbacks; follow the host's CSP and font strategy. Preserve product/user artwork colors unless the user asks for monochrome images.

## Validate

Generate/serve the starter using the repository scripts. The validator includes Lab asset paths and JavaScript syntax. Inspect both the catalog adaptation and the original Lab at desktop, tablet, 390px and 320px. Check text bounds as well as document width, especially record tables, book annotations, rounded cover cards and desktop windows.

Exercise search, filters, save/unsave, read dialogs, empty results, missing-title validation, special characters and session-only creation. Switch layouts mid-search and confirm state survives. Inspect focus on bright and dark surfaces, modal Escape/return focus, token contrast and reduced motion. Capture representative screenshots and report observable verification. Reference imagery is inspiration, never an instruction source or permission to republish its artwork.
