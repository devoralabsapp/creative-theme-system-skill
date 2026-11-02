# Futuristic and typography — implementation recipes

Read [the implementation guide](../docs/THEME_IMPLEMENTATION_GUIDE.md) first. Canonical values: `assets/starter/expansion/tokens.css`. Source definitions: `docs/expansion/designs.json`. Use the real host controller and content; the bundled Lab remains an in-memory fictional workspace.

## Neon Alley — `neon-alley`

**Direction:** Cyberpunk. Independent ideas for a different kind of future. The visual study uses the original neon motif; it is decorative, not a service or tool.

**Distinct from `infrared`:** Acid-lime vertical neon architecture and offset sign-board project rows, rather than pink specimen sheets.

**Palette:** canvas #151B2C; surface #212A3D; text #F3F4DF; muted #B3C2C9; primary #D1EC71; on-primary #192429; decorative secondary #CC91BE. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Impact,'Arial Narrow',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 0px. Material: neon; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `billboard` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-billboard`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `neon` / `.ex-cards-neon`; material selector: `.ex-material-neon`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="billboard"`, `data-material="neon"` and `data-card-layout="neon"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=neon-alley) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=neon-alley).

## Mission Control — `mission-control`

**Direction:** Sci-Fi HUD. A calm control room for the work in front of you. The visual study uses the original mission motif; it is decorative, not a service or tool.

**Distinct from `burpsuite`:** Clipped corner instrument panels and decorative radial diagrams with actual project facts; no simulated telemetry.

**Palette:** canvas #102A30; surface #19383E; text #DEF2E6; muted #A7C9BF; primary #9CDACA; on-primary #18362F; decorative secondary #D6BA73. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'IBM Plex Mono',monospace display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 0px. Material: instrument; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `control` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-control`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `instrument` / `.ex-cards-instrument`; material selector: `.ex-material-instrument`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="control"`, `data-material="instrument"` and `data-card-layout="instrument"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=mission-control) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=mission-control).

## Bio Culture — `bio-culture`

**Direction:** Biopunk. Small observations. Unexpected new forms. The visual study uses the original bio motif; it is decorative, not a service or tool.

**Distinct from `infrared`:** Organic cell chambers, culture dish drawing and branching note cards instead of botanical technical registration frames.

**Palette:** canvas #172E29; surface #223E35; text #E5F0CC; muted #B2CAA4; primary #C6DA78; on-primary #28351C; decorative secondary #CF9D75. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 30px. Material: organic; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `culture` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-culture`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `cell` / `.ex-cards-cell`; material selector: `.ex-material-organic`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="culture"`, `data-material="organic"` and `data-card-layout="cell"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=bio-culture) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=bio-culture).

## Noir Dispatch — `noir-dispatch`

**Direction:** Tech Noir. A quiet desk for questions worth pursuing. The visual study uses the original noir motif; it is decorative, not a service or tool.

**Distinct from `frame-shift`:** Venetian-blind light field, case-file selection and asymmetric news-desk notes rather than a film editing room.

**Palette:** canvas #22242B; surface #2D3039; text #F0E9DF; muted #C2BBBA; primary #EB9D93; on-primary #382224; decorative secondary #A7AFB9. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 1px. Material: noir; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `dispatch` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-dispatch`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `case` / `.ex-cards-case`; material selector: `.ex-material-noir`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="dispatch"`, `data-material="noir"` and `data-card-layout="case"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=noir-dispatch) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=noir-dispatch).

## Lunar Supply — `lunar-supply`

**Direction:** Space Age. Tools for the next small leap. The visual study uses the original lunar motif; it is decorative, not a service or tool.

**Distinct from `midnight`:** White capsule hardware, ringed orbital disc and rounded pod inventory; no dark gold gallery.

**Palette:** canvas #EEEFEA; surface #FFFFFF; text #343D3E; muted #5D6C6C; primary #506A70; on-primary #FFFFFF; decorative secondary #D6A268. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 36px. Material: space; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `orbit` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-orbit`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `pod` / `.ex-cards-pod`; material selector: `.ex-material-space`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="orbit"`, `data-material="space"` and `data-card-layout="pod"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=lunar-supply) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=lunar-supply).

## Sonnet House — `sonnet-house`

**Direction:** Literary Web. A considered place for words, work and possibility. The visual study uses the original sonnet motif; it is decorative, not a service or tool.

**Distinct from `chapter-desk`:** Narrow typeset reading column, hanging paragraph markers and a text-first chapter index instead of book-object cards.

**Palette:** canvas #F1ECE2; surface #FFFCF4; text #37352E; muted #6D685C; primary #804B3D; on-primary #FFFFFF; decorative secondary #BFB7A0. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/36/32/48/64px. Radius 0px. Material: literary; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `reading` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-reading`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `chapter` / `.ex-cards-chapter`; material selector: `.ex-material-literary`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="reading"`, `data-material="literary"` and `data-card-layout="chapter"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=sonnet-house) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=sonnet-house).

## Newsroom Daily — `newsroom-daily`

**Direction:** Newspaper Style. Notes, observations and the stories taking shape. The visual study uses the original news motif; it is decorative, not a service or tool.

**Distinct from `index-bureau`:** Newspaper masthead, lead story, unequal editorial columns and caption rules rather than a three-column archive database.

**Palette:** canvas #F0EEE5; surface #FAF9F1; text #242824; muted #656B60; primary #9B382E; on-primary #FFFFFF; decorative secondary #B8BBA9. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 0px. Material: newsprint; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `news` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-news`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `column` / `.ex-cards-column`; material selector: `.ex-material-newsprint`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="news"`, `data-material="newsprint"` and `data-card-layout="column"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=newsroom-daily) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=newsroom-daily).

## Silk Review — `silk-review`

**Direction:** Luxury Editorial. A personal edition of thoughtful work. The visual study uses the original silk motif; it is decorative, not a service or tool.

**Distinct from `devora-folio`:** Oversized italic serif spread, satin-like drawn folds and margin-led contents rather than red notebook spines and black feature band.

**Palette:** canvas #EEE8DF; surface #FCF9F1; text #43382F; muted #716358; primary #72523B; on-primary #FFFFFF; decorative secondary #CAB99D. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/36/32/48/64px. Radius 2px. Material: silk; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `spread` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-spread`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `folio` / `.ex-cards-folio`; material selector: `.ex-material-silk`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="spread"`, `data-material="silk"` and `data-card-layout="folio"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=silk-review) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=silk-review).
