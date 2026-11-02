# Retro and experimental — implementation recipes

Read [the implementation guide](../docs/THEME_IMPLEMENTATION_GUIDE.md) first. Canonical values: `assets/starter/expansion/tokens.css`. Source definitions: `docs/expansion/designs.json`. Use the real host controller and content; the bundled Lab remains an in-memory fictional workspace.

## Xerox Club — `xerox-club`

**Direction:** Punk Design / Grunge. Unpolished thoughts. Unreasonable possibilities. The visual study uses the original xerox motif; it is decorative, not a service or tool.

**Distinct from `cutout-dept`:** Photocopied monochrome flyer wall, distressed black typography and torn long records instead of lime collage sheets.

**Palette:** canvas #ECEBDD; surface #FAF9F0; text #171916; muted #55594C; primary #A5321B; on-primary #FFFFFF; decorative secondary #D6E84F. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Impact,'Arial Narrow',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 0px. Material: rough; shadow `3px 3px 0 var(--lab-foreground)`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `wall` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-wall`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `flyer` / `.ex-cards-flyer`; material selector: `.ex-material-rough`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="wall"`, `data-material="rough"` and `data-card-layout="flyer"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=xerox-club) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=xerox-club).

## Groove Cabinet — `groove-cabinet`

**Direction:** 70s Groovy. A warm cabinet of ideas with a little soul. The visual study uses the original groove motif; it is decorative, not a service or tool.

**Distinct from `chapter-desk`:** Concentric rainbow arches, rounded record sleeves and low horizontal cabinet navigation replace book objects.

**Palette:** canvas #F1DFC0; surface #FFF0D0; text #4C2B21; muted #785849; primary #9C3F25; on-primary #FFF5DC; decorative secondary #D89638. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 34px. Material: groove; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `cabinet` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-cabinet`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `sleeve` / `.ex-cards-sleeve`; material selector: `.ex-material-groove`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="cabinet"`, `data-material="groove"` and `data-card-layout="sleeve"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=groove-cabinet) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=groove-cabinet).

## Bubble Web — `bubble-web`

**Direction:** Y2K Aesthetic. Curious ideas, with a glossy turn-of-the-century optimism. The visual study uses the original bubble motif; it is decorative, not a service or tool.

**Distinct from `playroom`:** Chromatic star medallion, pearl capsule columns and a central portal rather than pastel paper blocks.

**Palette:** canvas #E6E8FA; surface #FAFBFF; text #263052; muted #5F6484; primary #5343A0; on-primary #FFFFFF; decorative secondary #C0B6EC. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 28px. Material: chrome; shadow `inset 0 2px 0 #fff,0 6px 18px #26305220`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `portal` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-portal`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `capsule` / `.ex-cards-capsule`; material selector: `.ex-material-chrome`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="portal"`, `data-material="chrome"` and `data-card-layout="capsule"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=bubble-web) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=bubble-web).

## Sunset Disk — `sunset-disk`

**Direction:** Vaporwave. Keep the ideas that arrived on a different wavelength. The visual study uses the original sunset motif; it is decorative, not a service or tool.

**Distinct from `velvet-orbit`:** Coral striped sun, receding grid horizon and ticket rows, without copper gallery ellipses.

**Palette:** canvas #28213B; surface #352A4A; text #FFEADA; muted #CDB7CA; primary #F5AB90; on-primary #302133; decorative secondary #A59ADB. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'IBM Plex Mono',monospace display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 0px. Material: neon; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `horizon` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-horizon`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `ticket` / `.ex-cards-ticket`; material selector: `.ex-material-neon`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="horizon"`, `data-material="neon"` and `data-card-layout="ticket"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=sunset-disk) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=sunset-disk).

## Memphis Workshop — `memphis-workshop`

**Direction:** Memphis Design. Bring the unexpected pieces together. The visual study uses the original memphis motif; it is decorative, not a service or tool.

**Distinct from `retro`:** Asymmetric primary-color shape matrix, zigzags and polka-dot tiles instead of pastel hard-shadow note cards.

**Palette:** canvas #FFF3D9; surface #FFFDF2; text #263345; muted #62636D; primary #2453A0; on-primary #FFFFFF; decorative secondary #EAB5AA. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 8px. Material: pattern; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `matrix` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-matrix`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `tile` / `.ex-cards-tile`; material selector: `.ex-material-pattern`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="matrix"`, `data-material="pattern"` and `data-card-layout="tile"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=memphis-workshop) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=memphis-workshop).

## Aero Garden — `aero-garden`

**Direction:** Frutiger Aero. Fresh air for the things you want to make. The visual study uses the original aero motif; it is decorative, not a service or tool.

**Distinct from `solar-glass`:** Blue sky sphere landscape and glossy aquatic panes instead of architectural green glasshouse ribs.

**Palette:** canvas #DDF1F4; surface #F5FCFC; text #21464E; muted #4B6E71; primary #21677B; on-primary #FFFFFF; decorative secondary #92BC6F. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 24px. Material: glass; shadow `0 12px 30px color-mix(in srgb,var(--lab-foreground) 10%,transparent)`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `panorama` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-panorama`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `glass` / `.ex-cards-glass`; material selector: `.ex-material-glass`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="panorama"`, `data-material="glass"` and `data-card-layout="glass"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=aero-garden) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=aero-garden).

## Cassette Desk — `cassette-desk`

**Direction:** Cassette Futurism. A tactile archive for your next direction. The visual study uses the original cassette motif; it is decorative, not a service or tool.

**Distinct from `mono-os`:** Beige hardware chassis, tape-reel drawing and slotted inventory rather than a white-window desktop.

**Palette:** canvas #D4CBB6; surface #E9E2D2; text #34372E; muted #505343; primary #754521; on-primary #FFFFFF; decorative secondary #CF963F. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'IBM Plex Mono',monospace display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 6px. Material: hardware; shadow `0 5px 0 color-mix(in srgb,var(--lab-foreground) 40%,var(--lab-background))`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `console` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-console`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `slot` / `.ex-cards-slot`; material selector: `.ex-material-hardware`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="console"`, `data-material="hardware"` and `data-card-layout="slot"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=cassette-desk) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=cassette-desk).

## Deconstruct Studio — `deconstruct-studio`

**Direction:** Deconstructivism. Break the expected shape. Keep the useful thought. The visual study uses the original deconstruct motif; it is decorative, not a service or tool.

**Distinct from `grid-assembly`:** Diagonal structural voids, offset opaque reading islands and faceted records rather than an exposed regular grid.

**Palette:** canvas #E9E7DF; surface #FAF9F4; text #27282A; muted #64636A; primary #8F303E; on-primary #FFFFFF; decorative secondary #B1BAC4. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 0px. Material: cut; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `fracture` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-fracture`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `fragment` / `.ex-cards-fragment`; material selector: `.ex-material-cut`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="fracture"`, `data-material="cut"` and `data-card-layout="fragment"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=deconstruct-studio) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=deconstruct-studio).
