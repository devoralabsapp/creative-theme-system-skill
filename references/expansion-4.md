# Playful and organic — implementation recipes

Read [the implementation guide](../docs/THEME_IMPLEMENTATION_GUIDE.md) first. Canonical values: `assets/starter/expansion/tokens.css`. Source definitions: `docs/expansion/designs.json`. Use the real host controller and content; the bundled Lab remains an in-memory fictional workspace.

## Pocket Friends — `pocket-friends`

**Direction:** Kawaii Aesthetic. A friendly pocket for the things you are making. The visual study uses the original pocket motif; it is decorative, not a service or tool.

**Distinct from `playroom`:** Pocket-shaped containers, tiny original friend faces and a compact collection of invitations rather than a generic playful hero.

**Palette:** canvas #F8E9E8; surface #FFFAF4; text #543C48; muted #7E606E; primary #A84565; on-primary #FFFFFF; decorative secondary #D6B7CF. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Fredoka','Nunito',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 26px. Material: cute; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `pocket` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-pocket`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `friend` / `.ex-cards-friend`; material selector: `.ex-material-cute`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="pocket"`, `data-material="cute"` and `data-card-layout="friend"` select the same composition and record grammar in both demos. Website Demo supplies its nine product records to the shared renderer through its own controller; preserve original artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=pocket-friends) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=pocket-friends).

## Ink Sketch — `ink-sketch`

**Direction:** Hand-Drawn / Doodle. Leave room for the first, imperfect line. The visual study uses the original sketch motif; it is decorative, not a service or tool.

**Distinct from `margin-notes`:** Hand-drawn double outlines, pencil-like registration and open sketchbook margins instead of stacked serif paper.

**Palette:** canvas #F4F0DF; surface #FFFCED; text #2E3A39; muted #636D64; primary #345C6D; on-primary #FFFFFF; decorative secondary #D8BE6F. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 4px. Material: sketch; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `sketch` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-sketch`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `sketch` / `.ex-cards-sketch`; material selector: `.ex-material-sketch`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="sketch"`, `data-material="sketch"` and `data-card-layout="sketch"` select the same composition and record grammar in both demos. Website Demo supplies its nine product records to the shared renderer through its own controller; preserve original artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=ink-sketch) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=ink-sketch).

## Panel Pop — `panel-pop`

**Direction:** Comic Book. Turn a small observation into the next good story. The visual study uses the original comic motif; it is decorative, not a service or tool.

**Distinct from `retro`:** Halftone panel montage, speech-caption blocks and angular comic gutters rather than pastel note surfaces.

**Palette:** canvas #FFF2CB; surface #FFFCED; text #272B36; muted #646575; primary #AB3428; on-primary #FFFFFF; decorative secondary #E9C249. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 0px. Material: comic; shadow `5px 5px 0 var(--lab-foreground)`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `comic` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-comic`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `panel` / `.ex-cards-panel`; material selector: `.ex-material-comic`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="comic"`, `data-material="comic"` and `data-card-layout="panel"` select the same composition and record grammar in both demos. Website Demo supplies its nine product records to the shared renderer through its own controller; preserve original artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=panel-pop) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=panel-pop).

## Story Grove — `story-grove`

**Direction:** Storybook Design. A gentle place for a new chapter to grow. The visual study uses the original storybook motif; it is decorative, not a service or tool.

**Distinct from `botanical`:** Illustrated woodland portal and chapter-path records rather than an editorial botanical catalog.

**Palette:** canvas #E9EEDC; surface #FCF9EB; text #344735; muted #596C50; primary #526B42; on-primary #FFFFFF; decorative secondary #C9A76C. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 14px. Material: storybook; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `storybook` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-storybook`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `story` / `.ex-cards-story`; material selector: `.ex-material-storybook`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="storybook"`, `data-material="storybook"` and `data-card-layout="story"` select the same composition and record grammar in both demos. Website Demo supplies its nine product records to the shared renderer through its own controller; preserve original artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=story-grove) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=story-grove).

## Cottage Ledger — `cottage-ledger`

**Direction:** Cottagecore. Good things, gathered slowly. The visual study uses the original cottage motif; it is decorative, not a service or tool.

**Distinct from `christmas`:** Gingham window panes, quilt-seam records and herb-pot illustration, without holiday symbols or evergreen gift ribbons.

**Palette:** canvas #F3E9DB; surface #FFFBF0; text #493F33; muted #726554; primary #8E4B41; on-primary #FFFFFF; decorative secondary #A9BC9A. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 6px. Material: gingham; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `window` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-window`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `quilt` / `.ex-cards-quilt`; material selector: `.ex-material-gingham`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="window"`, `data-material="gingham"` and `data-card-layout="quilt"` select the same composition and record grammar in both demos. Website Demo supplies its nine product records to the shared renderer through its own controller; preserve original artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=cottage-ledger) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=cottage-ledger).

## Petal Archive — `petal-archive`

**Direction:** Floral Vintage. A collection of small, lasting discoveries. The visual study uses the original petal motif; it is decorative, not a service or tool.

**Distinct from `infrared`:** Pale botanical plate with flower-stem dividers and vintage labels rather than hot-pink technical specimen sheets.

**Palette:** canvas #F0E5DF; surface #FCF6EE; text #4B3B3C; muted #755F62; primary #8C4960; on-primary #FFFFFF; decorative secondary #A8B29E. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 2px. Material: floral; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `herbarium` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-herbarium`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `botanic` / `.ex-cards-botanic`; material selector: `.ex-material-floral`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="herbarium"`, `data-material="floral"` and `data-card-layout="botanic"` select the same composition and record grammar in both demos. Website Demo supplies its nine product records to the shared renderer through its own controller; preserve original artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=petal-archive) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=petal-archive).

## Terra Workshop — `terra-workshop`

**Direction:** Rustic Design / Bohemian. An honest space for work in progress. The visual study uses the original terra motif; it is decorative, not a service or tool.

**Distinct from `clay-corner`:** Woven ruled layout, terracotta vessel silhouettes and raw stock tags instead of inflated soft clay objects.

**Palette:** canvas #E6DACA; surface #F7EBDD; text #4B392A; muted #705A47; primary #865033; on-primary #FFFFFF; decorative secondary #B3AA7E. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 3px. Material: earth; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `workshop` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-workshop`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `earth` / `.ex-cards-earth`; material selector: `.ex-material-earth`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="workshop"`, `data-material="earth"` and `data-card-layout="earth"` select the same composition and record grammar in both demos. Website Demo supplies its nine product records to the shared renderer through its own controller; preserve original artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=terra-workshop) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=terra-workshop).
