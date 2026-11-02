# Minimalism and morphism — implementation recipes

Read [the implementation guide](../docs/THEME_IMPLEMENTATION_GUIDE.md) first. Canonical values: `assets/starter/expansion/tokens.css`. Source definitions: `docs/expansion/designs.json`. Use the real host controller and content; the bundled Lab remains an in-memory fictional workspace.

## Zero Margin — `zero-margin`

**Direction:** Ultra-Minimalism. A little less between you and the thought. The visual study uses the original zero motif; it is decorative, not a service or tool.

**Distinct from `editorial`:** Large intentionally empty field, tiny entry index and borderless single-column records instead of magazine spreads.

**Palette:** canvas #FFFFFF; surface #FFFFFF; text #1D2222; muted #66706E; primary #263C3A; on-primary #FFFFFF; decorative secondary #D9DEDA. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/36/32/48/64px. Radius 0px. Material: quiet; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `void` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-void`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `line` / `.ex-cards-line`; material selector: `.ex-material-quiet`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="void"`, `data-material="quiet"` and `data-card-layout="line"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=zero-margin) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=zero-margin).

## Tatami House — `tatami-house`

**Direction:** Japandi. Considered work, with space to breathe. The visual study uses the original tatami motif; it is decorative, not a service or tool.

**Distinct from `botanical`:** Shoji threshold geometry and horizontal timber-slat records; no botanical leaf hero.

**Palette:** canvas #EBE5D6; surface #F8F3E8; text #343A2E; muted #5E6652; primary #526047; on-primary #FFFFFF; decorative secondary #B7A17E. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/32/32/48/64px. Radius 2px. Material: wood; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `threshold` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-threshold`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `slat` / `.ex-cards-slat`; material selector: `.ex-material-wood`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="threshold"`, `data-material="wood"` and `data-card-layout="slat"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=tatami-house) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=tatami-house).

## Concrete Calm — `concrete-calm`

**Direction:** Neumorphism. Quiet forms. Clear decisions. Useful beginnings. The visual study uses the original concrete motif; it is decorative, not a service or tool.

**Distinct from `playroom`:** Embossed monochrome ring and recessed task islands, with explicitly outlined controls rather than colorful flat blocks.

**Palette:** canvas #E3E8E5; surface #E3E8E5; text #283D36; muted #52675D; primary #3F6657; on-primary #FFFFFF; decorative secondary #C7D8D0. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 26px. Material: inset; shadow `inset 5px 5px 14px color-mix(in srgb,var(--lab-foreground) 12%,transparent),inset -5px -5px 14px var(--lab-surface)`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `island` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-island`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `inset` / `.ex-cards-inset`; material selector: `.ex-material-inset`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="island"`, `data-material="inset"` and `data-card-layout="inset"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=concrete-calm) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=concrete-calm).

## Clay Corner — `clay-corner`

**Direction:** Claymorphism. Good ideas start with something you can work with. The visual study uses the original clay motif; it is decorative, not a service or tool.

**Distinct from `fold-theory`:** Terracotta soft-volume objects, inflated inset surfaces and rounded sculptural project plinths replace folded paper.

**Palette:** canvas #EADDD4; surface #F9EFE7; text #4D382F; muted #745A4E; primary #954D36; on-primary #FFFFFF; decorative secondary #C7A799. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Fredoka','Nunito',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 30px. Material: clay; shadow `inset 4px 4px 0 #ffffff65,0 8px 0 color-mix(in srgb,var(--lab-accent) 30%,var(--lab-background))`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `objects` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-objects`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `clay` / `.ex-cards-clay`; material selector: `.ex-material-clay`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="objects"`, `data-material="clay"` and `data-card-layout="clay"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=clay-corner) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=clay-corner).

## Prism Desk — `prism-desk`

**Direction:** Holographic UI. A personal collection with more than one reflection. The visual study uses the original prism motif; it is decorative, not a service or tool.

**Distinct from `porcelain`:** Faceted iridescent prism, foil-framed exhibition labels and skew-free silver sheets replace ceramic fretwork.

**Palette:** canvas #E9EDF2; surface #FAFCFF; text #27364C; muted #59697F; primary #3D558D; on-primary #FFFFFF; decorative secondary #9FBEBB. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 8px. Material: foil; shadow `0 8px 20px color-mix(in srgb,var(--lab-accent) 15%,transparent)`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `display` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-display`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `foil` / `.ex-cards-foil`; material selector: `.ex-material-foil`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="display"`, `data-material="foil"` and `data-card-layout="foil"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=prism-desk) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=prism-desk).

## Lucent Room — `lucent-room`

**Direction:** Glassmorphism. Bring your thoughts into a little more focus. The visual study uses the original lucent motif; it is decorative, not a service or tool.

**Distinct from `solar-glass`:** Blue frosted overlapping rectangular panes and layered workspace column, with opaque text surfaces, no greenhouse arch.

**Palette:** canvas #E2E9F4; surface #F7FAFF; text #273D58; muted #546780; primary #315B8D; on-primary #FFFFFF; decorative secondary #B9C3E2. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 20px. Material: glass; shadow `0 12px 30px color-mix(in srgb,var(--lab-foreground) 10%,transparent)`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `layers` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-layers`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `glass` / `.ex-cards-glass`; material selector: `.ex-material-glass`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="layers"`, `data-material="glass"` and `data-card-layout="glass"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=lucent-room) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=lucent-room).

## Form Function — `form-function`

**Direction:** Bauhaus. Form follows the thought you are working on. The visual study uses the original bauhaus motif; it is decorative, not a service or tool.

**Distinct from `overprint-studio`:** Primary red/yellow/blue geometry in architectural modular columns and a vertical title spine, not layered print poster ink.

**Palette:** canvas #F2EAD7; surface #FFFAEB; text #242B30; muted #646869; primary #A73629; on-primary #FFFFFF; decorative secondary #E5BE45. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 0px. Material: primary; shadow `4px 4px 0 var(--lab-foreground)`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `module` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-module`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `primary` / `.ex-cards-primary`; material selector: `.ex-material-primary`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="module"`, `data-material="primary"` and `data-card-layout="primary"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=form-function) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=form-function).

## Nordic Shelf — `nordic-shelf`

**Direction:** Scandinavian Design. A useful shelf for everyday discoveries. The visual study uses the original nordic motif; it is decorative, not a service or tool.

**Distinct from `chapter-desk`:** Pale wood pegboard, shelf rails and measured joinery objects rather than book jackets and reading strips.

**Palette:** canvas #EEE9DF; surface #FFFDF5; text #35433D; muted #596A5F; primary #466D5B; on-primary #FFFFFF; decorative secondary #C9A67B. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/32/32/48/64px. Radius 4px. Material: wood; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `shelf` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-shelf`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `shelf` / `.ex-cards-shelf`; material selector: `.ex-material-wood`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="shelf"`, `data-material="wood"` and `data-card-layout="shelf"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=nordic-shelf) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=nordic-shelf).
