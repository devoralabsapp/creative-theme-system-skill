# Layout and immersive — implementation recipes

Read [the implementation guide](../docs/THEME_IMPLEMENTATION_GUIDE.md) first. Canonical values: `assets/starter/expansion/tokens.css`. Source definitions: `docs/expansion/designs.json`. Use the real host controller and content; the bundled Lab remains an in-memory fictional workspace.

## Bento Kitchen — `bento-kitchen`

**Direction:** Bento Grid. A neatly arranged place for delicious possibilities. The visual study uses the original bento motif; it is decorative, not a service or tool.

**Distinct from `playroom`:** Unequal compartment grid, clear spanning feature and segmented green trays instead of repeated equal cards.

**Palette:** canvas #E8EDDF; surface #FCFCF2; text #304535; muted #5A6C55; primary #3E6745; on-primary #FFFFFF; decorative secondary #D7C78D. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 20px. Material: bento; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `bento` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-bento`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `bento` / `.ex-cards-bento`; material selector: `.ex-material-bento`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="bento"`, `data-material="bento"` and `data-card-layout="bento"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=bento-kitchen) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=bento-kitchen).

## Mosaic Studio — `mosaic-studio`

**Direction:** Masonry Layout. Collect the things that belong together unexpectedly. The visual study uses the original mosaic motif; it is decorative, not a service or tool.

**Distinct from `porcelain`:** Variable-height aligned mosaic columns and inset colored tesserae instead of blue ceramic equal-width tiles.

**Palette:** canvas #F0E5DA; surface #FCF7EB; text #3F3934; muted #6B6359; primary #7A4E40; on-primary #FFFFFF; decorative secondary #9DB4AF. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 6px. Material: mosaic; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `mosaic` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-mosaic`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `mosaic` / `.ex-cards-mosaic`; material selector: `.ex-material-mosaic`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="mosaic"`, `data-material="mosaic"` and `data-card-layout="mosaic"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=mosaic-studio) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=mosaic-studio).

## Wide Story — `wide-story`

**Direction:** Full-Bleed Layout. Follow the story beyond the first impression. The visual study uses the original wide motif; it is decorative, not a service or tool.

**Distinct from `tidal-atlas`:** Panoramic original landscape, bounded text label and wide horizontal narrative rows, no nautical coordinates.

**Palette:** canvas #E7E7DB; surface #F8F7EC; text #303B35; muted #5B685B; primary #4A6051; on-primary #FFFFFF; decorative secondary #B9A27D. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/32/32/48/64px. Radius 0px. Material: landscape; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `fullbleed` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-fullbleed`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `story` / `.ex-cards-story`; material selector: `.ex-material-landscape`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="fullbleed"`, `data-material="landscape"` and `data-card-layout="story"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=wide-story) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=wide-story).

## Depth Walk — `depth-walk`

**Direction:** Spatial Storytelling. There is more than one layer to a good idea. The visual study uses the original depth motif; it is decorative, not a service or tool.

**Distinct from `fold-theory`:** Stepped contour terraces, a side reading rail and layered section bands instead of one folded-paper sculpture.

**Palette:** canvas #E5E2DB; surface #F8F5EF; text #41434A; muted #60616A; primary #4D5A86; on-primary #FFFFFF; decorative secondary #B6A4BD. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 12px. Material: depth; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `terrace` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-terrace`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `terrace` / `.ex-cards-terrace`; material selector: `.ex-material-depth`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="terrace"`, `data-material="depth"` and `data-card-layout="terrace"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=depth-walk) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=depth-walk).

## Constellation Desk — `constellation-desk`

**Direction:** Spatial UI. A working constellation of thoughts worth following. The visual study uses the original constellation motif; it is decorative, not a service or tool.

**Distinct from `velvet-orbit`:** Connected-node map with readable planar labels and a side index, no copper concentric gallery rings.

**Palette:** canvas #1C2540; surface #283451; text #E7EDFA; muted #B3C2E0; primary #B6C9FF; on-primary #253354; decorative secondary #C5B8DC. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 12px. Material: spatial; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `constellation` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-constellation`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `node` / `.ex-cards-node`; material selector: `.ex-material-spatial`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="constellation"`, `data-material="spatial"` and `data-card-layout="node"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=constellation-desk) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=constellation-desk).

## Iso Studio — `iso-studio`

**Direction:** Isometric UI. A clear workspace for the pieces coming together. The visual study uses the original iso motif; it is decorative, not a service or tool.

**Distinct from `grid-assembly`:** Isometric block study and orthographic project plinths; actual reading cards remain front-facing.

**Palette:** canvas #E7ECEF; surface #FBFDFD; text #30464C; muted #576B71; primary #386B7B; on-primary #FFFFFF; decorative secondary #B5C9BB. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 4px. Material: isometric; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `isometric` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-isometric`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `block` / `.ex-cards-block`; material selector: `.ex-material-isometric`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="isometric"`, `data-material="isometric"` and `data-card-layout="block"` adapt the hero and actual product grid. Preserve original product artwork and the existing search/filter/sort controller.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=iso-studio) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=iso-studio).
