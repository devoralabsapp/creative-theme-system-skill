# Hybrid signatures — implementation recipes

Read [the implementation guide](../docs/THEME_IMPLEMENTATION_GUIDE.md) first. Canonical values: `assets/starter/expansion/tokens.css`. Source definitions: `docs/expansion/designs.json`. Use the real host controller and content; the bundled Lab remains an in-memory fictional workspace.

## Swiss Cut — `swiss-cut`

**Direction:** Swiss Brutalism. A precise place for independent ideas. The visual study uses the original swiss motif; it is decorative, not a service or tool.

**Distinct from `index-bureau`:** Strict asymmetric red/white typographic slabs, oversized vertical index and raw ledger cuts rather than equal archival cells.

**Palette:** canvas #F6F3EB; surface #FFFFFF; text #1C2425; muted #606B68; primary #B62B26; on-primary #FFFFFF; decorative secondary #B2C0B9. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 0px. Material: swiss; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `swiss` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-swiss`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `swiss` / `.ex-cards-swiss`; material selector: `.ex-material-swiss`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="swiss"`, `data-material="swiss"` and `data-card-layout="swiss"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=swiss-cut) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=swiss-cut).

## Cloud Pet — `cloud-pet`

**Direction:** Kawaii Claymorphism. A soft collection for the ideas you are growing into. The visual study uses the original cloud motif; it is decorative, not a service or tool.

**Distinct from `pocket-friends`:** Inflated original cloud forms with elevated stacked trays and sky-blue depth; not flat pink pockets or terracotta clay plinths.

**Palette:** canvas #E9EFF4; surface #FAFCFF; text #3A4A60; muted #5A6B81; primary #426695; on-primary #FFFFFF; decorative secondary #D9C2CB. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Fredoka','Nunito',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 32px. Material: cloud; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `cloud` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-cloud`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `cloud` / `.ex-cards-cloud`; material selector: `.ex-material-cloud`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="cloud"`, `data-material="cloud"` and `data-card-layout="cloud"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=cloud-pet) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=cloud-pet).

## Quiet Current — `quiet-current`

**Direction:** Organic Minimalism. Useful thoughts. A gentler rhythm. The visual study uses the original current motif; it is decorative, not a service or tool.

**Distinct from `botanical`:** Water-cut negative-space bands, a flowing reading path and quiet round-edge records instead of botanical illustrations.

**Palette:** canvas #EDF2EF; surface #FCFFFD; text #344C45; muted #5C6F66; primary #3F6F65; on-primary #FFFFFF; decorative secondary #B9D4CC. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/36/32/48/64px. Radius 24px. Material: flow; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `current` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-current`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `flow` / `.ex-cards-flow`; material selector: `.ex-material-flow`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="current"`, `data-material="flow"` and `data-card-layout="flow"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=quiet-current) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=quiet-current).

## Atelier Array — `atelier-array`

**Direction:** Playful Bento. Arrange the good things your own way. The visual study uses the original array motif; it is decorative, not a service or tool.

**Distinct from `bento-kitchen`:** Unequal expressive ink-framed dashboard tiles, oversized editorial labels and actual collection facts rather than green compartment trays.

**Palette:** canvas #EEE9EF; surface #FFF9FF; text #41384B; muted #70617B; primary #79476F; on-primary #FFFFFF; decorative secondary #CAC39F. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 8px. Material: array; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `array` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-array`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `array` / `.ex-cards-array`; material selector: `.ex-material-array`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="array"`, `data-material="array"` and `data-card-layout="array"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=atelier-array) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=atelier-array).
