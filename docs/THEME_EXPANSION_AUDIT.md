# Theme expansion audit

Source of truth: the registry contains **50 existing themes** across 4 collections. Baseline commit: `57f1273`. All IDs, metadata, order, default `botanical`, storage key and deep links are preserved. The browser-derived inventory below samples actual Lab tokens and DOM composition, not just marketing labels.

## Architecture and constraints

- `assets/starter/theme-registry.js` is one JSON registry assigned to `window.STUDIO_THEMES`; its array controls within-family order. All, both standalone selectors and the searchable shell picker derive from it.
- The shell keeps two same-origin, height-synchronized frames mounted. All remains the fresh root default; a valid `?theme=` link opens Lab. URL, storage, then default choose the theme. The outer document owns scrolling. Preserve source/origin checks and do not echo theme messages.
- `lab/lab.js` owns project records and session actions. New compositions receive escaped shared helpers; they never introduce another store/provider. Existing catalog `demo.js` owns product search/filter/sort/dialogs.
- Semantic Lab tokens live in scoped CSS. Catalog tokens map into `--paper`, `--ink`, `--ws-*`; original product SVG colors remain intact. Original vector art is decorative.
- `scripts/create_demo.mjs`, `validate_demo.mjs` and `serve.mjs` provide buildless portability. Vercel serves `assets/starter`; no backend, auth, framework or package install is needed.
- The fifty original definitions are captured in `docs/expansion/baseline-registry.json`; no existing theme is removed, renamed or reordered. The eleven Volume Five identities remain directly after SẮC / 01. New themes append at the end of Creative Lab before Studio.

## Existing inventory

| ID / name | Collection | Actual canvas / accent / display | Visual identity | Actual Lab composition |
| --- | --- | --- | --- | --- |
| `retro` · Playful Retro Neo-Brutalism | creative | #FAF6E9 / #FFD21C / 'Fredoka','Nunito',sans-serif | Pastels, black outlines, hard shadows | `legacy-mast row / playful-hero / toolbar / section-heading row` |
| `mono-os` · Mono OS | creative | #D9D9D9 / #111111 / 'IBM Plex Mono',ui-monospace,monospace | A grayscale desktop with white window chrome and shallow ink edges | `os-mast row / os-desktop / screen-foot` |
| `chapter-desk` · Chapter Desk | creative | #F4E9D5 / #A34018 / 'Be Vietnam Pro',system-ui,sans-serif | Warm reading desk, book-shaped records and compact annotations | `chapter-layout` |
| `afterhours-fm` · Afterhours FM | creative | #101010 / #F7D449 / 'Be Vietnam Pro',system-ui,sans-serif | A dark creative queue with bright cover blocks and rounded controls | `fm-layout` |
| `margin-notes` · Margin Notes | creative | #F0E9DF / #713346 / Georgia,serif | Layered editorial paper, serif notes and soft printed colors | `row margin-mast / margin-desk / toolbar / section-heading row` |
| `grid-assembly` · Grid Assembly | creative | #F7F5EF / #A92030 / 'Be Vietnam Pro',system-ui,sans-serif | Exposed structural cells and stepped architectural content modules | `row assembly-mast / assembly-scene / toolbar / section-heading row` |
| `specimen-press` · Specimen Press | creative | #F6F6F2 / #212121 / 'Be Vietnam Pro',system-ui,sans-serif | Publication-like objects, metadata tables and outlined display type | `row / specimen-mast / toolbar / section-heading row` |
| `index-bureau` · Index Bureau | creative | #FFFFFF / #151515 / 'Be Vietnam Pro',system-ui,sans-serif | A ruled monochrome archive with a three-column information hierarchy | `bureau-mast row / bureau-ticker / bureau-layout / screen-foot` |
| `devora-folio` · Devora Folio | creative | #FFFFFF / #B91C30 / 'Be Vietnam Pro',system-ui,-apple-system,'Segoe UI',sans-serif | White editorial space, red notebook spines, black feature band and soft corners | `legacy-mast row / folio-hero / folio-feature / toolbar` |
| `devora-signal` · Devora Signal | creative | #FFFFFF / #C81E32 / 'Be Vietnam Pro',system-ui,-apple-system,'Segoe UI',sans-serif | White workbench, red index tabs, black utility rail and square controls | `signal-layout` |
| `devora-press` · Devora Press | creative | #F4F1E8 / #F36643 / 'Be Vietnam Pro', system-ui, -apple-system, 'Segoe UI', sans-serif | Warm editorial paper, persimmon actions, cobalt details and a cut-corner signature | `legacy-mast row / press-heading row / press-feature / toolbar` |
| `sac-01` · SẮC / 01 — Paper / Brutalist | creative | #F3F2EE / #111111 / 'Arial Black','Manrope',Arial,sans-serif | Paper, black window frames, hard shadows and restrained red accents | `os-mast row / os-desktop / screen-foot` |
| `redline-atelier` · Redline Atelier | creative | #FAFAF7 / #BD2825 / 'Be Vietnam Pro',Arial,sans-serif | White architectural sheets, red construction arcs and oversized annotated type | `v5-mast / redline-plan / toolbar / v5-section` |
| `cobalt-court` · Cobalt Court | creative | #173CD7 / #F5FF70 / 'Be Vietnam Pro',Arial,sans-serif | Electric blue sports typography, court lines and a numbered starting lineup | `v5-mast / court-banner / court-next / toolbar` |
| `darkroom-zero` · Darkroom Zero | creative | #171715 / #E8A273 / 'DM Sans',Arial,sans-serif | A photographic lightbox, burnt-orange safelight and perforated contact sheets | `v5-mast / darkroom-stage / darkroom-focus / toolbar` |
| `fold-theory` · Fold Theory | creative | #F6F4EF / #C23224 / 'Be Vietnam Pro',Arial,sans-serif | Vermilion paper sculpture, asymmetric folds and faceted white project sheets | `v5-mast / fold-stage / fold-feature / toolbar` |
| `motion-manifesto` · Motion Manifesto | creative | #F5F5F0 / #C22D28 / Impact,'Arial Narrow',Arial,sans-serif | Red-and-black condensed statements, graphic arrows and a bold typographic work list | `v5-mast / motion-stage / motion-feature / toolbar` |
| `pixel-riot` · Pixel Riot | creative | #F5F5ED / #BF302C / 'IBM Plex Mono',monospace | Red-and-black pixel graphics, stepped window frames and an interactive idea inventory | `v5-mast / pixel-heading / pixel-console / toolbar` |
| `cutout-dept` · Cutout Dept. | creative | #D9EF73 / #22271B / 'Be Vietnam Pro',Arial,sans-serif | Acid-lime cut-paper collage, black tape and a torn-edge creative pinboard | `v5-mast / cutout-title / cutout-board / toolbar` |
| `overprint-studio` · Overprint Studio | creative | #F5EEE2 / #BD3327 / Impact,'Arial Narrow',Arial,sans-serif | Vermilion-and-cobalt print layers, registration marks and oversized graphic editions | `v5-mast / overprint-poster / overprint-focus / toolbar` |
| `carbon-bureau` · Carbon Bureau | creative | #E7E7E2 / #B32E2E / 'IBM Plex Mono',monospace | A red-backed filing desk, numbered dossier tabs and typewritten working records | `v5-mast / carbon-intro / carbon-folder / toolbar` |
| `foundry-floor` · Foundry Floor | creative | #DDDCD5 / #B34215 / Impact,'Arial Narrow',Arial,sans-serif | Industrial orange panels, mechanical forms and heavy workshop labels | `v5-mast / foundry-stage / foundry-strip / foundry-feature` |
| `frame-shift` · Frame Shift | creative | #141515 / #F37668 / 'Be Vietnam Pro',Arial,sans-serif | A black-and-crimson editing room with graphic film frames and a real project shot list | `v5-mast / frameshift-heading / frameshift-room / toolbar` |
| `paper-circuit` · Paper Circuit | creative | #F5F1E7 / #2454B4 / 'Manrope',Arial,sans-serif | Folded drafting paper, electric blue traces and lime contacts | `row assembly-mast / assembly-scene / toolbar / section-heading row` |
| `night-transit` · Night Transit | creative | #101F2B / #F6BF59 / 'Manrope',Arial,sans-serif | Midnight navy, route diagrams and amber ticket details | `row assembly-mast / assembly-scene / toolbar / section-heading row` |
| `infrared` · Infrared Herbarium | creative | #251D2E / #FF9AC6 / 'Manrope',Arial,sans-serif | Hot pink specimen sheets and dark botanical registration marks | `bureau-mast row / bureau-ticker / bureau-layout / screen-foot` |
| `magnetic-poetry` · Magnetic Poetry | creative | #E5E8E7 / #A52C3B / 'Nunito',Arial,sans-serif | Scattered word tiles, fridge-silver surfaces and cherry magnets | `row margin-mast / margin-desk / toolbar / section-heading row` |
| `porcelain` · Porcelain Index | creative | #F2F4EF / #244D9C / 'Playfair Display',Georgia,serif | Cobalt ceramic tiles, fine blue borders and museum labels | `legacy-mast row / editorial-spread / toolbar / project-grid legacy-cards editorial-cards` |
| `velvet-orbit` · Velvet Orbit | creative | #201923 / #E4AF85 / 'Playfair Display',Georgia,serif | Aubergine velvet, copper orbital rings and curved gallery cards | `legacy-mast row / night-hero / toolbar / project-grid legacy-cards night-cards` |
| `solar-glass` · Solar Glasshouse | creative | #EDF5DC / #366C3F / 'Manrope',Arial,sans-serif | Transparent green panes, structural ribs and warm citrus | `legacy-mast row / garden-hero / toolbar / section-heading row` |
| `type-foundry` · Type Foundry | creative | #F0FF5B / #232323 / 'Manrope',Arial,sans-serif | Acid yellow, oversized type and a typesetter specimen grid | `row / specimen-mast / toolbar / section-heading row` |
| `tidal-atlas` · Tidal Atlas | creative | #EAF2ED / #236C77 / 'Playfair Display',Georgia,serif | Deep sea contours, chart coordinates and tide-blue frames | `row assembly-mast / assembly-scene / toolbar / section-heading row` |
| `riso-post` · Riso Post Office | creative | #F6EDDB / #C43E2D / 'Manrope',Arial,sans-serif | Vermilion ink, postal perforations and offset paper | `row / specimen-mast / toolbar / section-heading row` |
| `botanical` · Botanical | studio | #F8F6EF / #4C5B3B / 'Playfair Display',Georgia,serif | Warm cream and olive | `legacy-mast row / garden-hero / toolbar / section-heading row` |
| `editorial` · Editorial | studio | #FAF9F6 / #202321 / 'Playfair Display',Georgia,serif | Minimal magazine layout | `legacy-mast row / editorial-spread / toolbar / project-grid legacy-cards editorial-cards` |
| `playroom` · Playroom | studio | #FFFAF1 / #6653A0 / 'Fredoka',Arial,sans-serif | Soft rounded colorful blocks | `legacy-mast row / playful-hero / toolbar / section-heading row` |
| `midnight` · Midnight | studio | #181E24 / #D9BA7C / 'Playfair Display',Georgia,serif | Ink surfaces and warm gold | `legacy-mast row / night-hero / toolbar / project-grid legacy-cards night-cards` |
| `commandline` · Command line | workspace | #000000 / #1D1D1D / 'Cascadia Code','Consolas','Courier New',monospace | Black, white and gray monospace terminal | `legacy-mast row / terminal-window / screen-foot` |
| `vscode` · Visual Studio Code | workspace | #1E1E1E / #3794FF / 'Consolas','Courier New',monospace | Dark editor and syntax accents | `legacy-mast row / editor-layout / screen-foot` |
| `excel` · Excel | workspace | #F3F6F3 / #107C41 / 'Manrope',Arial,sans-serif | Green workbook and cell grids | `legacy-mast row / sheet-workbook / screen-foot` |
| `canva` · Canva | workspace | #F5F3FC / #000000 / 'Manrope',Arial,sans-serif | Light cyan and purple creative canvas | `legacy-mast row / canvas-layout / screen-foot` |
| `figma` · Figma | workspace | #F2F2F3 / #7850D0 / 'Manrope',Arial,sans-serif | Dotted canvas and purple selection frames | `legacy-mast row / canvas-layout / screen-foot` |
| `photoshop` · Photoshop | workspace | #242424 / #72B6FF / 'Manrope',Arial,sans-serif | Charcoal panels and transparency canvas | `legacy-mast row / canvas-layout / screen-foot` |
| `file-explorer` · File Explorer | workspace | #F3F6FB / #2865B1 / 'Manrope',Arial,sans-serif | Light file browser, yellow folders and breadcrumb navigation | `legacy-mast row / file-explorer / screen-foot` |
| `notion` · Notion | workspace | #FBFAF7 / #F0EDE6 / 'Manrope',Arial,sans-serif | Quiet document workspace, warm white and minimal page cards | `legacy-mast row / document-layout / screen-foot` |
| `burpsuite` · Burp Suite | workspace | #202124 / #FF9868 / 'Consolas','Courier New',monospace | Charcoal utility panels, orange tabs and monospace details | `legacy-mast row / editor-layout / screen-foot` |
| `halloween` · Halloween | seasonal | #151019 / #FFAB4A / 'Fredoka',Arial,sans-serif | Moonlit curiosity cabinet, pumpkin illustration and arched specimen cards | `legacy-mast row / hallow-hero / hallow-focus / toolbar` |
| `christmas` · Christmas | seasonal | #F5F1E8 / #214F3D / 'Playfair Display',Georgia,serif | Evergreen paper tree, ribbon-wrapped notes and a festive letter desk | `legacy-mast row / xmas-room / xmas-letter / toolbar` |
| `tet` · Tết Holiday | seasonal | #A6222B / #F4D17B / 'Playfair Display',Georgia,serif | Lacquer red, golden apricot blossoms and lucky-envelope notes | `legacy-mast row / tet-hero / tet-feature / toolbar` |
| `black-friday` · Black Friday | seasonal | #101010 / #FF4B3E / 'Be Vietnam Pro',Arial,sans-serif | Black-and-red poster typography, receipt notes and a bold working edit | `legacy-mast row / bf-strip / bf-hero / bf-collection-head` |

## Full candidate comparison

170 candidate entries (169 unique labels). Classification totals: EXISTING: 34, NEW: 50, OVERLAPPING: 20, TECHNIQUE: 37, VARIANT: 29. `NEW` maps to a concrete proposed identity; `VARIANT` is only implemented where explicitly approved in the plan. Other variants remain deferred. Techniques are not counted as themes.

| Group | Candidate | Class | Existing/planned reference | Decision and similarity rationale |
| --- | --- | --- | --- | --- |
| A | Digital Brutalism | EXISTING | sac-01 / retro | The existing restrained window signature and playful outlined pastel theme already cover this structural language. |
| A | Soft Neo-Brutalism | EXISTING | sac-01 / retro | The existing restrained window signature and playful outlined pastel theme already cover this structural language. |
| A | Anti-Design | OVERLAPPING | deconstruct-studio / xerox-club | Covered by the planned fractured composition and raw photocopied flyer wall; adding every umbrella label would duplicate them. |
| A | Neo-Maximalism | OVERLAPPING | deconstruct-studio / xerox-club | Covered by the planned fractured composition and raw photocopied flyer wall; adding every umbrella label would duplicate them. |
| A | Punk Design | NEW | xerox-club | Photocopied monochrome flyer wall, distressed black typography and torn long records instead of lime collage sheets. |
| A | Grunge | NEW | xerox-club | Photocopied monochrome flyer wall, distressed black typography and torn long records instead of lime collage sheets. |
| A | Deconstructivism | NEW | deconstruct-studio | Diagonal structural voids, offset opaque reading islands and faceted records rather than an exposed regular grid. |
| A | Chaos Design | OVERLAPPING | deconstruct-studio / xerox-club | Covered by the planned fractured composition and raw photocopied flyer wall; adding every umbrella label would duplicate them. |
| A | Acid Graphics | EXISTING | type-foundry / motion-manifesto / cutout-dept | Existing oversized type, acid stock and cut-paper editions provide this identity without adding another poster recolor. |
| A | Experimental Typography | EXISTING | type-foundry / motion-manifesto / cutout-dept | Existing oversized type, acid stock and cut-paper editions provide this identity without adding another poster recolor. |
| B | Neo-Retro | EXISTING | sac-01 / retro | The existing restrained window signature and playful outlined pastel theme already cover this structural language. |
| B | Y2K Aesthetic | NEW | bubble-web | Chromatic star medallion, pearl capsule columns and a central portal rather than pastel paper blocks. |
| B | 70s Groovy | NEW | groove-cabinet | Concentric rainbow arches, rounded record sleeves and low horizontal cabinet navigation replace book objects. |
| B | Vaporwave | NEW | sunset-disk | Coral striped sun, receding grid horizon and ticket rows, without copper gallery ellipses. |
| B | Vintage | OVERLAPPING | cottage-ledger / petal-archive | The specific gingham cottage and vintage floral plates provide stronger identities than another generic aged-paper theme. |
| B | 80s Synthwave | OVERLAPPING | sunset-disk / neon-alley | The sunset grid and neon sign architecture already carry these adjacent nighttime cues. |
| B | Retrofuturism | VARIANT | cassette-desk | The beige cassette hardware composition is the selected, bounded interpretation; no separate generic duplicate. |
| B | 90s Web | VARIANT | bubble-web | A possible later browser-era content variant. Deferred: it needs a distinct directory/content model, not fake counters or another window skin. |
| B | Web 1.0 | VARIANT | bubble-web | A possible later browser-era content variant. Deferred: it needs a distinct directory/content model, not fake counters or another window skin. |
| B | Pixel Retro | EXISTING | pixel-riot | The real project inventory, stepped pixel character and red/black pixel surfaces already provide this theme. |
| B | Arcade UI | EXISTING | pixel-riot | The real project inventory, stepped pixel character and red/black pixel surfaces already provide this theme. |
| B | Memphis Design | NEW | memphis-workshop | Asymmetric primary-color shape matrix, zigzags and polka-dot tiles instead of pastel hard-shadow note cards. |
| B | Mid-Century Modern | VARIANT | nordic-shelf / groove-cabinet | A later furniture-led variant is plausible; this release selects timber joinery and the period cabinet rather than adding a palette-only mid-century duplicate. |
| B | Old-School Macintosh | EXISTING | mono-os | White window furniture and a gray desktop already exist; do not add a near-identical branded replica. |
| B | Frutiger Aero | NEW | aero-garden | Blue sky sphere landscape and glossy aquatic panes instead of architectural green glasshouse ribs. |
| B | Cassette Futurism | NEW | cassette-desk | Beige hardware chassis, tape-reel drawing and slotted inventory rather than a white-window desktop. |
| C | Ultra-Minimalism | NEW | zero-margin | Large intentionally empty field, tiny entry index and borderless single-column records instead of magazine spreads. |
| C | Soft Minimalism | EXISTING | notion / botanical / editorial | Existing quiet document, warm natural and editorial compositions sufficiently represent these directions. |
| C | Warm Minimalism | EXISTING | notion / botanical / editorial | Existing quiet document, warm natural and editorial compositions sufficiently represent these directions. |
| C | Flat Design | EXISTING | notion / botanical / editorial | Existing quiet document, warm natural and editorial compositions sufficiently represent these directions. |
| C | Material Design | TECHNIQUE | shared scoped surface primitives | Treat depth, translucency and elevation as bounded surface capabilities with opaque readable controls and fallbacks, not automatically separate themes. |
| C | Bauhaus | NEW | form-function | Primary red/yellow/blue geometry in architectural modular columns and a vertical title spine, not layered print poster ink. |
| C | Japanese Minimalism | VARIANT | tatami-house | The selected timber threshold/quiet house is the concrete direction; broad regional or material labels are not additional themes. |
| C | Japandi | NEW | tatami-house | Shoji threshold geometry and horizontal timber-slat records; no botanical leaf hero. |
| C | Wabi-Sabi | VARIANT | tatami-house | The selected timber threshold/quiet house is the concrete direction; broad regional or material labels are not additional themes. |
| C | Scandinavian Design | NEW | nordic-shelf | Pale wood pegboard, shelf rails and measured joinery objects rather than book jackets and reading strips. |
| C | Quiet Luxury | VARIANT | silk-review / zero-margin | Refine density or editorial tone within the planned quiet/luxury systems instead of duplicating their structure. |
| C | Corporate Minimalism | VARIANT | silk-review / zero-margin | Refine density or editorial tone within the planned quiet/luxury systems instead of duplicating their structure. |
| C | Swiss Design | VARIANT | swiss-cut | Approved hybrid: strict asymmetric type slabs, oversized vertical index and a raw red cut distinguish it from Index Bureau. |
| D | Glassmorphism | NEW | lucent-room | Blue frosted overlapping rectangular panes and layered workspace column, with opaque text surfaces, no greenhouse arch. |
| D | Neumorphism | NEW | concrete-calm | Embossed monochrome ring and recessed task islands, with explicitly outlined controls rather than colorful flat blocks. |
| D | Claymorphism | NEW | clay-corner | Terracotta soft-volume objects, inflated inset surfaces and rounded sculptural project plinths replace folded paper. |
| D | Skeuomorphism | VARIANT | cassette-desk | The beige cassette hardware composition is the selected, bounded interpretation; no separate generic duplicate. |
| D | Soft UI | TECHNIQUE | shared scoped surface primitives | Treat depth, translucency and elevation as bounded surface capabilities with opaque readable controls and fallbacks, not automatically separate themes. |
| D | Liquid Glass | TECHNIQUE | shared scoped surface primitives | Treat depth, translucency and elevation as bounded surface capabilities with opaque readable controls and fallbacks, not automatically separate themes. |
| D | Acrylic UI | TECHNIQUE | shared scoped surface primitives | Treat depth, translucency and elevation as bounded surface capabilities with opaque readable controls and fallbacks, not automatically separate themes. |
| D | Translucent UI | TECHNIQUE | shared scoped surface primitives | Treat depth, translucency and elevation as bounded surface capabilities with opaque readable controls and fallbacks, not automatically separate themes. |
| D | Paper UI | EXISTING | margin-notes / cutout-dept | Paper stacks, cut edges and editorial notes already exist as working compositions. |
| D | Layered UI | TECHNIQUE | shared scoped surface primitives | Treat depth, translucency and elevation as bounded surface capabilities with opaque readable controls and fallbacks, not automatically separate themes. |
| D | Tactile Design | TECHNIQUE | shared scoped surface primitives | Treat depth, translucency and elevation as bounded surface capabilities with opaque readable controls and fallbacks, not automatically separate themes. |
| D | 3D UI | TECHNIQUE | shared scoped surface primitives | Treat depth, translucency and elevation as bounded surface capabilities with opaque readable controls and fallbacks, not automatically separate themes. |
| D | Isometric UI | NEW | iso-studio | Isometric block study and orthographic project plinths; actual reading cards remain front-facing. |
| D | Holographic UI | NEW | prism-desk | Faceted iridescent prism, foil-framed exhibition labels and skew-free silver sheets replace ceramic fretwork. |
| E | Cyberpunk | NEW | neon-alley | Acid-lime vertical neon architecture and offset sign-board project rows, rather than pink specimen sheets. |
| E | Sci-Fi HUD | NEW | mission-control | Clipped corner instrument panels and decorative radial diagrams with actual project facts; no simulated telemetry. |
| E | Dark Futurism | OVERLAPPING | sunset-disk / neon-alley | The sunset grid and neon sign architecture already carry these adjacent nighttime cues. |
| E | Solarpunk | EXISTING | solar-glass | The green ribbed glasshouse, sunlight and structural panes already supply the ecological technology identity. |
| E | Biopunk | NEW | bio-culture | Organic cell chambers, culture dish drawing and branching note cards instead of botanical technical registration frames. |
| E | Tech Noir | NEW | noir-dispatch | Venetian-blind light field, case-file selection and asymmetric news-desk notes rather than a film editing room. |
| E | Neon Futurism | OVERLAPPING | sunset-disk / neon-alley | The sunset grid and neon sign architecture already carry these adjacent nighttime cues. |
| E | AI-Native Aesthetic | OVERLAPPING | prism-desk / aurora-console | The concrete prism/clear software-panel compositions provide the visual language; these are broad positioning labels. |
| E | Matrix UI | VARIANT | mission-control | Possible scoped data/syntax accent variant; do not recolor the established monochrome Command line theme. |
| E | Wireframe Aesthetic | TECHNIQUE | redline-atelier / bounded SVG scenes | Wire traces and generated diagrams are reusable drawing techniques; they should not imply live telemetry or create a duplicate technical frame. |
| E | Space Age | NEW | lunar-supply | White capsule hardware, ringed orbital disc and rounded pod inventory; no dark gold gallery. |
| E | Holographic Futurism | OVERLAPPING | prism-desk / aurora-console | The concrete prism/clear software-panel compositions provide the visual language; these are broad positioning labels. |
| E | Generative Art UI | TECHNIQUE | redline-atelier / bounded SVG scenes | Wire traces and generated diagrams are reusable drawing techniques; they should not imply live telemetry or create a duplicate technical frame. |
| F | Magazine Layout | EXISTING | notion / botanical / editorial | Existing quiet document, warm natural and editorial compositions sufficiently represent these directions. |
| F | Newspaper Style | NEW | newsroom-daily | Newspaper masthead, lead story, unequal editorial columns and caption rules rather than a three-column archive database. |
| F | Poster Design | EXISTING | type-foundry / motion-manifesto / cutout-dept | Existing oversized type, acid stock and cut-paper editions provide this identity without adding another poster recolor. |
| F | Type Brutalism | EXISTING | type-foundry / motion-manifesto / cutout-dept | Existing oversized type, acid stock and cut-paper editions provide this identity without adding another poster recolor. |
| F | Kinetic Typography | TECHNIQUE | typographic and motion primitives | Use intentional title scale, grid alignment and optional short interaction feedback; respect reduced motion and avoid duplicate typography themes. |
| F | Oversized Typography | TECHNIQUE | typographic and motion primitives | Use intentional title scale, grid alignment and optional short interaction feedback; respect reduced motion and avoid duplicate typography themes. |
| F | Monospace Design | EXISTING | commandline / vscode | The terminal/editor references already cover this visual identity and must keep their current behavior. |
| F | Literary Web | NEW | sonnet-house | Narrow typeset reading column, hanging paragraph markers and a text-first chapter index instead of book-object cards. |
| F | Typographic Grid | TECHNIQUE | typographic and motion primitives | Use intentional title scale, grid alignment and optional short interaction feedback; respect reduced motion and avoid duplicate typography themes. |
| F | Luxury Editorial | NEW | silk-review | Oversized italic serif spread, satin-like drawn folds and margin-led contents rather than red notebook spines and black feature band. |
| F | Typography-First | EXISTING | notion / botanical / editorial | Existing quiet document, warm natural and editorial compositions sufficiently represent these directions. |
| G | Kawaii Aesthetic | NEW | pocket-friends | Pocket-shaped containers, tiny original friend faces and a compact collection of invitations rather than a generic playful hero. |
| G | Hand-Drawn / Doodle | NEW | ink-sketch | Hand-drawn double outlines, pencil-like registration and open sketchbook margins instead of stacked serif paper. |
| G | Scrapbook Aesthetic | EXISTING | margin-notes / cutout-dept | Paper stacks, cut edges and editorial notes already exist as working compositions. |
| G | Cartoon UI | VARIANT | pocket-friends / clay-corner / ink-sketch | Use the selected original illustration/material language; a broader synonym is not another selectable identity. |
| G | Comic Book | NEW | panel-pop | Halftone panel montage, speech-caption blocks and angular comic gutters rather than pastel note surfaces. |
| G | Pop Art | OVERLAPPING | panel-pop / pocket-friends / memphis-workshop | Covered by the planned comic framing, pocket characters and primary patterned workshop; avoid a second bright recolor. |
| G | Sticker Design | VARIANT | cutout-dept / memphis-workshop | A bounded density/decorative variant of existing cut paper or primary geometry, not a new composition in this release. |
| G | Toy-Like UI | VARIANT | pocket-friends / clay-corner / ink-sketch | Use the selected original illustration/material language; a broader synonym is not another selectable identity. |
| G | Whimsical Design | OVERLAPPING | panel-pop / pocket-friends / memphis-workshop | Covered by the planned comic framing, pocket characters and primary patterned workshop; avoid a second bright recolor. |
| G | Storybook Design | NEW | story-grove | Illustrated woodland portal and chapter-path records rather than an editorial botanical catalog. |
| G | Illustrated Landing Page | TECHNIQUE | original illustrative SVG layer | Illustration is an optional medium used by many identities; actual layout/material still determines a theme. |
| G | Dopamine Design | VARIANT | cutout-dept / memphis-workshop | A bounded density/decorative variant of existing cut paper or primary geometry, not a new composition in this release. |
| G | Kidcore | OVERLAPPING | panel-pop / pocket-friends / memphis-workshop | Covered by the planned comic framing, pocket characters and primary patterned workshop; avoid a second bright recolor. |
| G | Paper Cutout | EXISTING | margin-notes / cutout-dept | Paper stacks, cut edges and editorial notes already exist as working compositions. |
| G | Handmade Aesthetic | VARIANT | pocket-friends / clay-corner / ink-sketch | Use the selected original illustration/material language; a broader synonym is not another selectable identity. |
| H | Organic Design | EXISTING | botanical | The warm botanical reference already supplies this light, natural editorial direction. |
| H | Bohemian / Boho | NEW | terra-workshop | Woven ruled layout, terracotta vessel silhouettes and raw stock tags instead of inflated soft clay objects. |
| H | Cottagecore | NEW | cottage-ledger | Gingham window panes, quilt-seam records and herb-pot illustration, without holiday symbols or evergreen gift ribbons. |
| H | Ethereal / Dreamy | VARIANT | reverie-room / terra-workshop / story-grove | Use the concrete dream, earthy workshop or story illustration; the broader adjective is not an additional skin. |
| H | Botanical Design | EXISTING | botanical | The warm botanical reference already supplies this light, natural editorial direction. |
| H | Eco-Minimalism | EXISTING | botanical | The warm botanical reference already supplies this light, natural editorial direction. |
| H | Earthy Aesthetic | VARIANT | reverie-room / terra-workshop / story-grove | Use the concrete dream, earthy workshop or story illustration; the broader adjective is not an additional skin. |
| H | Rustic Design | NEW | terra-workshop | Woven ruled layout, terracotta vessel silhouettes and raw stock tags instead of inflated soft clay objects. |
| H | Natural Luxury | VARIANT | tatami-house | The selected timber threshold/quiet house is the concrete direction; broad regional or material labels are not additional themes. |
| H | Biophilic Design | VARIANT | reverie-room / terra-workshop / story-grove | Use the concrete dream, earthy workshop or story illustration; the broader adjective is not an additional skin. |
| H | Floral Vintage | NEW | petal-archive | Pale botanical plate with flower-stem dividers and vintage labels rather than hot-pink technical specimen sheets. |
| H | Farmhouse Aesthetic | OVERLAPPING | cottage-ledger / petal-archive | The specific gingham cottage and vintage floral plates provide stronger identities than another generic aged-paper theme. |
| H | Soft Nature | EXISTING | botanical | The warm botanical reference already supplies this light, natural editorial direction. |
| I | Bento Grid | NEW | bento-kitchen | Unequal compartment grid, clear spanning feature and segmented green trays instead of repeated equal cards. |
| I | Asymmetric Layout | TECHNIQUE | shared responsive composition primitives | These are layout/interaction capabilities. Avoid forced horizontal body scrolling or fake canvas controls; choose a deliberate content composition instead. |
| I | Masonry Layout | NEW | mosaic-studio | Variable-height aligned mosaic columns and inset colored tesserae instead of blue ceramic equal-width tiles. |
| I | Split-Screen | TECHNIQUE | shared responsive composition primitives | These are layout/interaction capabilities. Avoid forced horizontal body scrolling or fake canvas controls; choose a deliberate content composition instead. |
| I | Modular Grid | TECHNIQUE | shared responsive composition primitives | These are layout/interaction capabilities. Avoid forced horizontal body scrolling or fake canvas controls; choose a deliberate content composition instead. |
| I | Broken Grid | VARIANT | deconstruct-studio | Implemented through the approved fractured reading islands, while opaque text and normal reading order remain intact. |
| I | Full-Bleed Layout | NEW | wide-story | Panoramic original landscape, bounded text label and wide horizontal narrative rows, no nautical coordinates. |
| I | Card-Based Design | TECHNIQUE | shared responsive composition primitives | These are layout/interaction capabilities. Avoid forced horizontal body scrolling or fake canvas controls; choose a deliberate content composition instead. |
| I | Dashboard Layout | TECHNIQUE | shared responsive composition primitives | These are layout/interaction capabilities. Avoid forced horizontal body scrolling or fake canvas controls; choose a deliberate content composition instead. |
| I | Single-Page Storytelling | TECHNIQUE | shared responsive composition primitives | These are layout/interaction capabilities. Avoid forced horizontal body scrolling or fake canvas controls; choose a deliberate content composition instead. |
| I | Horizontal Scrolling | TECHNIQUE | shared responsive composition primitives | These are layout/interaction capabilities. Avoid forced horizontal body scrolling or fake canvas controls; choose a deliberate content composition instead. |
| I | Infinite Canvas | TECHNIQUE | shared responsive composition primitives | These are layout/interaction capabilities. Avoid forced horizontal body scrolling or fake canvas controls; choose a deliberate content composition instead. |
| I | Immersive Layout | OVERLAPPING | constellation-desk / wide-story | Immersion is an outcome; the spatial node map and panoramic story are the selected concrete interpretations. |
| J | Immersive 3D | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Scrollytelling | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Cinematic Design | EXISTING | frame-shift | The shot list, original graphic frame and director-note panel already provide a cinematic application composition. |
| J | WebGL / Interactive Art | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Parallax Design | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Motion-First | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Micro-Interaction UI | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Scroll Animation | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Interactive Storytelling | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Spatial UI | NEW | constellation-desk | Connected-node map with readable planar labels and a side index, no copper concentric gallery rings. |
| J | 3D Product Showcase | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Gamified Website | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| J | Motion Poster | TECHNIQUE | accessible spatial/motion layer | Optional progressive enhancement, not one theme per effect. This release keeps static readable SVG/CSS depth fallbacks and native controls; no fake playback, game scores or mandatory WebGL. |
| K | Art Deco | NEW | deco-society | Stepped gold fan, symmetrical salon frame and long gilded records rather than an informal gold night gallery. |
| K | Art Nouveau | NEW | nouveau-garden | Whiplash vine framing, stained-glass flower panel and arch-ended records rather than simple garden line art. |
| K | Constructivism | NEW | construct-bureau | Red wedge / black beam typography and asymmetrical constructive panel grid, not a red arrow billboard. |
| K | Dadaism | OVERLAPPING | deconstruct-studio / xerox-club | Covered by the planned fractured composition and raw photocopied flyer wall; adding every umbrella label would duplicate them. |
| K | Psychedelic Art | VARIANT | groove-cabinet / petal-archive / silk-review | Possible later ornamental variants. Deferred rather than adding historical labels to essentially the same period-inspired surface. |
| K | Victorian | VARIANT | groove-cabinet / petal-archive / silk-review | Possible later ornamental variants. Deferred rather than adding historical labels to essentially the same period-inspired surface. |
| K | Gothic | NEW | cabinet-obscura | Restrained stone-like pointed arches and silver tracery instead of pumpkins, ghosts and curiosity-cabinet orange. |
| K | Baroque | OVERLAPPING | deco-society | Do not equate period styles; a separate Baroque theme would require substantially more original ornament than this curated release. Deferred to avoid ornamental filler. |
| K | Renaissance-Inspired | VARIANT | groove-cabinet / petal-archive / silk-review | Possible later ornamental variants. Deferred rather than adding historical labels to essentially the same period-inspired surface. |
| K | Abstract Expressionism | NEW | gestural-field | Broad irregular brush gestures, open asymmetric text and raw edge record bands rather than registered geometric ink layers. |
| K | Op Art | NEW | optic-interval | Static black/ivory interference bands and alternating visual intervals, rather than navigational sea-chart contours. |
| K | Screenprint | EXISTING | overprint-studio / riso-post | The registered overprinted edition and riso postal surfaces already supply these print methods. |
| K | Duotone | TECHNIQUE | decorative ink fields only | A bounded color/texture treatment can support a theme; do not alter supplied product artwork or create a gradient-only duplicate. |
| K | Surrealism | NEW | reverie-room | Impossible staircase, floating arch and a dream-like vertical reading sequence on light mauve stock. |
| K | Risograph | EXISTING | overprint-studio / riso-post | The registered overprinted edition and riso postal surfaces already supply these print methods. |
| L | Modern SaaS | OVERLAPPING | prism-desk / aurora-console | The concrete prism/clear software-panel compositions provide the visual language; these are broad positioning labels. |
| L | Aurora UI | NEW | aurora-console | Subtle bounded aurora ribbons, clear software panels and a left task rail rather than bright media cover blocks. |
| L | OLED Dark Minimal | NEW | obsidian-space | Large spatial sans-serif statement and borderless gallery on pure black, rather than terminal prompts and monospace rows. |
| L | Mesh Gradient / Grainy UI | TECHNIQUE | decorative ink fields only | A bounded color/texture treatment can support a theme; do not alter supplied product artwork or create a gradient-only duplicate. |
| L | Developer-First UI | EXISTING | commandline / vscode | The terminal/editor references already cover this visual identity and must keep their current behavior. |
| L | Technical Minimalism | EXISTING | commandline / vscode | The terminal/editor references already cover this visual identity and must keep their current behavior. |
| L | Data-Dense UI | NEW | signal-ledger | Compact side summary, actual category/state ledger and selected-note inspector; no workbook formula bar or spreadsheet mimicry. |
| L | Command Palette UI | TECHNIQUE | existing native searchable theme picker | Searchable keyboard-driven selection is an application capability, already present, rather than a standalone aesthetic. |
| L | Dashboard-First | OVERLAPPING | prism-desk / aurora-console | The concrete prism/clear software-panel compositions provide the visual language; these are broad positioning labels. |
| L | Gradient Minimalism | VARIANT | aurora-console / lucent-room | Optional surface/tone variants of the selected clear panels; not a new theme without further structural differentiation. |
| L | Monochrome SaaS | OVERLAPPING | zero-margin | The borderless quiet index is the selected minimal composition; SaaS is a product category rather than another visual identity. |
| L | Product-Led Design | TECHNIQUE | host product behavior | A product strategy, not a selectable visual style. Preserve the real host application and avoid fabricated conversion claims. |
| L | Dark Luxe | EXISTING | midnight / velvet-orbit | The dark gold library and copper velvet gallery already supply this identity. |
| L | AI Product Aesthetic | OVERLAPPING | prism-desk / aurora-console | The concrete prism/clear software-panel compositions provide the visual language; these are broad positioning labels. |
| M | Neo-Retro Brutalism | EXISTING | sac-01 / retro | The existing restrained window signature and playful outlined pastel theme already cover this structural language. |
| M | Soft Neo-Brutalism | EXISTING | sac-01 / retro | The existing restrained window signature and playful outlined pastel theme already cover this structural language. |
| M | Editorial Minimalism | EXISTING | notion / botanical / editorial | Existing quiet document, warm natural and editorial compositions sufficiently represent these directions. |
| M | Playful Bento | NEW | atelier-array | Unequal expressive ink-framed dashboard tiles, oversized editorial labels and actual collection facts rather than green compartment trays. |
| M | Retro Futurism | VARIANT | cassette-desk | The beige cassette hardware composition is the selected, bounded interpretation; no separate generic duplicate. |
| M | Organic Minimalism | VARIANT | quiet-current | Approved hybrid: water-cut negative-space bands and a flowing reading path distinguish it from leaf-based Botanical. |
| M | Scrapbook Editorial | EXISTING | margin-notes / cutout-dept | Paper stacks, cut edges and editorial notes already exist as working compositions. |
| M | Dark Glassmorphism | VARIANT | aurora-console / lucent-room | Optional surface/tone variants of the selected clear panels; not a new theme without further structural differentiation. |
| M | Kawaii Claymorphism | NEW | cloud-pet | Inflated original cloud forms with elevated stacked trays and sky-blue depth; not flat pink pockets or terracotta clay plinths. |
| M | Swiss Brutalism | VARIANT | swiss-cut | Approved hybrid: strict asymmetric type slabs, oversized vertical index and a raw red cut distinguish it from Index Bureau. |

## Missing styles and duplicate controls

The strongest gaps are period-specific retro materials, quiet spatial minimalism, physical depth systems, illustrated narrative interfaces, selected artistic traditions and legible software workspaces. The plan contains 51 distinct additions for a potential total of 101. Op Art is included because the previously explored Violet Frequency is **not** in the actual registry; it cannot be counted as an existing theme.

Every addition has a declared nearest neighbor and a structural difference in `expansion/designs.json`. The release uses distinct composition trees, navigation arrangements, record grammars and original vector studies. Shared primitives are permitted; changing only a palette/font is not. No separate themes are added for generic card layout, animation, scrolling, AI branding or material aliases.

## Roadmap

See [master plan](THEME_EXPANSION_MASTER_PLAN.md), [implementation guide](THEME_IMPLEMENTATION_GUIDE.md) and [progress](THEME_EXPANSION_PROGRESS.md). Audit classifications do not claim that unimplemented techniques are available.
