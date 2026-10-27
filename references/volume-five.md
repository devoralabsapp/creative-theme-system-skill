# Volume Five — eleven new directions

Eleven original compositions extend the collection from 39 to 50. They belong to Creative Lab. Playful Retro remains the first theme. The eleven additions form a continuous group immediately after SẮC / 01 — Paper / Brutalist, preserving their internal order from Redline Atelier through Frame Shift. Their reference demos use English copy.

## Sources and adaptation

- `assets/starter/volume-five-tokens.css` is the canonical semantic palette source. Both previews use it; do not maintain a second palette by copying hex values from screenshots.
- `assets/starter/lab/volume-five.js` composes six retained studies with five revised studies from `lab/volume-five-revision.js`, exporting eleven composition functions to the existing Lab controller. It receives project helpers and never creates a separate store, theme provider or network service.
- `assets/starter/lab/volume-five-layouts.css` and `lab/volume-five-revision.css` own the Lab compositions. `volume-five-themes.css` and `volume-five-revision.css` translate their identities into the existing catalog; `volume-five-catalog.js` supplies themed hero copy.
- `assets/starter/assets/volume-five/<id>.svg` contains original decorative vector studies. These are not controls or data visualizations. Use them as an optional visual anchor rather than making imagery a prerequisite for understanding the page.
- `assets/starter/volume-five-preview.html` compares the eleven studies and links to their working demos. The All gallery still covers all fifty themes. The review query `?revised=1` isolates the five replacement studies, numbered 45, 46, 47, 48 and 50. `?study=45` opens the latest Pixel Riot review alone.

Registry entries use `edition: "volume-five"`. Bootstrap and the catalog controller expose it as `data-edition` for shared, scoped catalog rules. Theme identity remains the stable `id`; edition is optional presentation metadata, not another theme selection mechanism. Switching back to an older theme clears the edition attribute.

For an existing app, map the semantic roles and structural relationships into its current provider. Keep the app's data, text, persistence and supported actions. A theme inspired by hardware or photography does not authorize adding simulated playback, camera access or file operations.

## Eleven identity recipes

### Redline Atelier — `redline-atelier`

**Identity:** a precise architectural sheet with an expressive red gesture. Warm white `#FAFAF7`, white surface, near-black `#181818`, red `#BD2825`. Be Vietnam Pro headlines and IBM Plex Mono annotation labels. Square geometry, one-pixel rules and no shadows.

The large red-and-black statement, construction-arc drawing and selected project form three unequal columns. Treat the selected note as an annotation attached to the drawing, using a narrow red rule. Lower records resemble joined upright sheets with small registration marks. Unlike Grid Assembly, this is not a stepped construction grid; unlike Devora Signal, it has no dark utility rail.

On tablets, move the selected project below the statement and drawing. On phones, stack all three in reading order. Construction lines stay inside the decorative drawing and never cross actual copy or form fields.

### Cobalt Court — `cobalt-court`

**Identity:** an independent ideas club with athletic confidence. Cobalt `#173CD7`, white text, chalk-blue secondary text and acid-yellow `#F5FF70` actions with dark blue `#152581` lettering. Heavy italic sans-serif headings; square controls and thin court-like lines.

Use a large three-line statement and an original ball diagram as the banner. The adjacent count must be the actual project total. Follow it with the selected project and a numbered, horizontally organized lineup. Sport is a visual language, not a scoreboard with invented matches or achievements. Keep the art beside the title on wide screens and below it on phones so it never obscures the words.

### Darkroom Zero — `darkroom-zero`

**Identity:** a quiet photographic developing space. Charcoal `#171715`, deep neutral `#22221F`, warm paper text `#F5F1E8`, orange safelight `#E8A273`. Georgia display text, neutral sans-serif prose and small monospace frame labels.

A bordered lightbox holds an original geometric landscape study. A narrow orange rule marks the selected note. Lower project cards use dark film borders and bounded abstract negatives. Perforations belong to the drawing, not to interactive outlines. This differs from the colorful covers and rounded media queue of Afterhours FM.

Keep the dark shell quiet and place brightness inside the lightbox. Do not dim ordinary body text to imitate photographic ambience. Stack the lightbox below the introduction on phones. No fake camera settings, timers, exposure data or photo-upload action.

### Fold Theory — `fold-theory`

**Identity:** a clean paper surface with sculptural vermilion folds. Paper `#F6F4EF`, warm white `#FFFDF8`, ink `#252420`, vermilion action `#C23224`. Medium-weight sans-serif display text, small monospace labels and flat, squared sheets.

Use an asymmetric introduction paired with an original folded geometric object. A selected note sits in a shallow sheet with a narrow red edge. Project records have faceted decorative corners and small folded-object marks. Unlike Paper Circuit, no blue circuitry or drafting traces are used; unlike Margin Notes, readable sheets never rotate.

Clip only the decorative art/image field. Text, controls, focus rings and long project titles retain rectangular, unclipped reading areas. On narrow screens the sculpture moves below the statement.

### Motion Manifesto — `motion-manifesto`

**Identity:** a red-and-black graphic statement. Chalk `#F5F5F0`, near-black `#141414`, red `#C22D28`. Impact or a locally available condensed display face, with Be Vietnam Pro for prose and controls. Letter spacing stays close to zero on condensed headings.

Create a billboard-sized red panel with a short statement and directional arrow. Follow it with a strong black divider and a horizontal list of actual projects. The oversized display treatment belongs to short headings; do not condense body text, metadata or input text. It differs from Type Foundry's acid-yellow specimen grid and Black Friday's receipt composition.

The name suggests momentum through structure, not mandatory animation. The reference is fully static. On phones, place the arrow on its own line and keep every word readable without horizontal scrolling.

### Pixel Riot — `pixel-riot`

**Identity:** a playful digital workbench in chalk `#F5F5ED`, white `#FFFFFF`, ink `#171B18` and red `#BF302C`. IBM Plex Mono headings and labels with Be Vietnam Pro reading copy. Squared, stepped ornaments, 2px black frames and shallow hard edges. `assets/starter/pixel-riot.css` supplies the Lab and catalog styling on the canonical palette from `volume-five-tokens.css`.

Place a two-line monospace statement above an idea console. The console contains the selected project beside an original red/white pixel character, followed by a real inventory of project-selection buttons. The next-idea action cycles through actual session records. The lower collection uses small stepped pixel ornaments and black/red art strips. Unlike Mono OS this is not a gray desktop with window furniture; unlike Retro, use no pastel palette or rounded paper cards.

The pixel character is a decorative vector study and never replaces the host brand mark. Avoid scoreboards, lives, progress meters, game controls or other unsupported game behavior. All visible controls read, save or select actual project records. Numbers are project totals or entry indices. On phones stack the note and artwork, then wrap the inventory into two columns. Keep reading text smooth and readable; pixel treatment belongs to geometry rather than tiny bitmap type. Clip decorative icons only, leaving native button focus rings visible.

### Cutout Dept. — `cutout-dept`

**Identity:** a cut-paper department in acid lime `#D9EF73`, warm paper `#F8F7EB`, black-green ink `#1E2218` and black `#22271B` actions with white text. Heavy sans-serif display type mixes upright and italic fragments. The visual material is torn paper and black tape, with thin outlines and no hard offset card shadows.

Use a wide patched statement above a collage board and a separate selected-note sheet. The original collage combines a cut arch, small paper fragments and restrained tape marks. Lower project cards have bounded black/lime art fields and a torn lower edge. Unlike Magnetic Poetry, this is not a collection of scattered word magnets; unlike Retro, it does not use pastel blocks, thick outlines or pill controls.

Only decorative fragments rotate. Real reading sheets stay upright. A torn edge may decorate an article boundary, but never clip reading text, hit targets or focus rings. The selected note uses an opaque paper surface with explicitly readable muted text. Stack the board and selected sheet on phones.

### Overprint Studio — `overprint-studio`

**Identity:** a screen-print edition in warm stock `#F5EEE2`, pale surface `#FFFBF2`, vermilion `#BD3327`, cobalt `#254196` and a bounded purple overlap. Condensed display text belongs to the short poster statement; ordinary descriptions use a readable sans-serif face.

Compose a single print-poster area from oversized stacked type and original overlapping geometric ink layers with registration marks. The selected project sits beneath the poster, separated by a cobalt rule and a small decorative ink-swatch stack. Lower records are flat edition sheets with alternating red/cobalt print panels. Unlike Riso Post Office, use no postal perforations, stamps or envelope layout. Unlike Motion Manifesto, the graphic focus is layered ink rather than a directional arrow and working list.

Do not apply blend modes or textured transparency to actual UI text. Ink overlaps remain inside the SVG or decorative panels. On phones the poster art moves below its statement and the project collection becomes one column. No simulated print controls or manufacturing status.

### Carbon Bureau — `carbon-bureau`

**Identity:** a working filing desk in light gray `#E7E7E2`, white stock `#FAFAF5`, carbon ink `#202322` and red `#B32E2E`. IBM Plex Mono display type, neutral sans-serif descriptions and shallow, one-pixel file edges. A red backplate and folder tab organize the main dossier.

This is an app composition: a real project selector occupies the left index and an expanded selected dossier occupies the right. Clicking a file updates its title, category, summary, note excerpt and read/save actions through the existing session controller. A small original folder drawing appears only as a secondary proof mark. Lower records use a compact horizontal ledger. Unlike File Explorer, the primary surface is a readable dossier rather than a folder-icon grid; unlike Index Bureau, the red filing backplate and actual selected-note excerpt dominate the hierarchy.

On phones the file index becomes a wrapping two-column list above the dossier. The dossier remains full-width and readable, without a nested scrollbar. Use actual project totals and states only. Do not add fake confidentiality labels, approvals, dates or cloud-file actions.

### Foundry Floor — `foundry-floor`

**Identity:** a working industrial surface. Concrete `#DDDCD5`, light stock `#EBEAE3`, dark olive ink `#272A24`, burnt-orange action `#B34215`; the bounded hero uses a brighter orange panel. Condensed display type with neutral sans-serif descriptions and monospace workshop labels.

Compose the hero from a narrow workshop label, large stacked type and an original mechanical object study. A short, bounded striped edge separates the hero from the selected work. Collection cards resemble material panels with heavy top rules. It differs from Type Foundry's letter specimens: this theme draws from fabrication and physical assembly.

Use genuine collection data only. The edition number is a design-series label, not a production measurement. Avoid fake safety statuses, machine controls or manufacturing telemetry. On narrow screens remove the redundant narrow label and stack the object below the title.

### Frame Shift — `frame-shift`

**Identity:** a compact editing room in near-black `#141515`, charcoal `#202222`, chalk `#F4F2EB` and light crimson `#F37668` paired with dark `#251614` text. Medium-weight sans-serif display type and short monospace production labels. Fine neutral borders and small 2px corners.

A wide title sits above a three-part room: a real project shot list, an original graphic frame with a selected-project read action, and an expanded note sidebar. Selecting an entry updates the room through the existing Lab state. The frame drawing is a fictional geometric study; it does not imply access to real video. Lower cards keep their artwork in bounded film-frame fields. Unlike Darkroom Zero, there is no photographic safelight/lightbox; this theme emphasizes selection across the shot list, preview and notes.

At intermediate widths move the notes beneath the list/preview. On phones stack all three and turn the shot list into a wrapping set of buttons. Do not invent playback, timecodes, timeline scrubbing, audio meters or media-editing actions. All visible buttons open, save or select actual project notes.

## Verification

Inspect both Lab and Website Demo at 1440, 1024, 768, 390 and 320 pixels. Check text bounds, decorative art loading, opaque reading surfaces, light-on-dark and dark-on-light focus, dialogs, keyboard dismissal and long names. Exercise the existing session controller: create an idea containing special characters, search, filter, save, read, change themes and return through All. Verify that catalog filtering and sorting survive the switch independently of the Lab state.

Refresh the actual Lab screenshot for every new theme in both the All preview assets and README captures. The default root experience remains All; existing direct theme links and the first Creative theme retain their behavior.
