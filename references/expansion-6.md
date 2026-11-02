# Artistic and digital — implementation recipes

Read [the implementation guide](../docs/THEME_IMPLEMENTATION_GUIDE.md) first. Canonical values: `assets/starter/expansion/tokens.css`. Source definitions: `docs/expansion/designs.json`. Use the real host controller and content; the bundled Lab remains an in-memory fictional workspace.

## Deco Society — `deco-society`

**Direction:** Art Deco. A considered collection, beautifully kept. The visual study uses the original deco motif; it is decorative, not a service or tool.

**Distinct from `midnight`:** Stepped gold fan, symmetrical salon frame and long gilded records rather than an informal gold night gallery.

**Palette:** canvas #202A29; surface #2D3935; text #F3E4BF; muted #C9BC9B; primary #E5C78C; on-primary #302A1E; decorative secondary #8EA99A. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/32/32/48/64px. Radius 0px. Material: deco; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `salon` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-salon`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `deco` / `.ex-cards-deco`; material selector: `.ex-material-deco`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="salon"`, `data-material="deco"` and `data-card-layout="deco"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=deco-society) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=deco-society).

## Nouveau Garden — `nouveau-garden`

**Direction:** Art Nouveau. Organic ideas, with a quietly decorative spirit. The visual study uses the original nouveau motif; it is decorative, not a service or tool.

**Distinct from `botanical`:** Whiplash vine framing, stained-glass flower panel and arch-ended records rather than simple garden line art.

**Palette:** canvas #EBEAD7; surface #FAF7E7; text #354B3E; muted #596B53; primary #4B715A; on-primary #FFFFFF; decorative secondary #C5A76C. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 18px. Material: nouveau; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `botanic` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-botanic`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `vine` / `.ex-cards-vine`; material selector: `.ex-material-nouveau`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="botanic"`, `data-material="nouveau"` and `data-card-layout="vine"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=nouveau-garden) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=nouveau-garden).

## Construct Bureau — `construct-bureau`

**Direction:** Constructivism. Purposeful shapes for independent work. The visual study uses the original construct motif; it is decorative, not a service or tool.

**Distinct from `motion-manifesto`:** Red wedge / black beam typography and asymmetrical constructive panel grid, not a red arrow billboard.

**Palette:** canvas #ECE4D3; surface #FCF5E8; text #24282A; muted #65635C; primary #B63628; on-primary #FFFFFF; decorative secondary #AAA79B. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Impact,'Arial Narrow',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 0px. Material: construct; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `diagonal` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-diagonal`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `construct` / `.ex-cards-construct`; material selector: `.ex-material-construct`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="diagonal"`, `data-material="construct"` and `data-card-layout="construct"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=construct-bureau) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=construct-bureau).

## Cabinet Obscura — `cabinet-obscura`

**Direction:** Gothic. Keep a little mystery in the work. The visual study uses the original gothic motif; it is decorative, not a service or tool.

**Distinct from `halloween`:** Restrained stone-like pointed arches and silver tracery instead of pumpkins, ghosts and curiosity-cabinet orange.

**Palette:** canvas #25262E; surface #31323D; text #EBE6E5; muted #BEB7C2; primary #C8ADC7; on-primary #302335; decorative secondary #8B96AA. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 2px. Material: gothic; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `cathedral` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-cathedral`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `arch` / `.ex-cards-arch`; material selector: `.ex-material-gothic`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="cathedral"`, `data-material="gothic"` and `data-card-layout="arch"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=cabinet-obscura) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=cabinet-obscura).

## Reverie Room — `reverie-room`

**Direction:** Surrealism. Ordinary thoughts. Unusual doors. The visual study uses the original reverie motif; it is decorative, not a service or tool.

**Distinct from `velvet-orbit`:** Impossible staircase, floating arch and a dream-like vertical reading sequence on light mauve stock.

**Palette:** canvas #E9DFE6; surface #FBF3F5; text #493D52; muted #6C5B77; primary #85506E; on-primary #FFFFFF; decorative secondary #AABBC4. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** Georgia,'Times New Roman',serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 4px. Material: surreal; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `dream` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-dream`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `dream` / `.ex-cards-dream`; material selector: `.ex-material-surreal`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="dream"`, `data-material="surreal"` and `data-card-layout="dream"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=reverie-room) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=reverie-room).

## Gestural Field — `gestural-field`

**Direction:** Abstract Expressionism. A personal collection with room for instinct. The visual study uses the original gesture motif; it is decorative, not a service or tool.

**Distinct from `overprint-studio`:** Broad irregular brush gestures, open asymmetric text and raw edge record bands rather than registered geometric ink layers.

**Palette:** canvas #F1E9DD; surface #FFFAF0; text #3D3A32; muted #6B665A; primary #93503C; on-primary #FFFFFF; decorative secondary #A0B6A2. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/32/32/48/64px. Radius 0px. Material: gestural; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `gesture` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-gesture`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `gesture` / `.ex-cards-gesture`; material selector: `.ex-material-gestural`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="gesture"`, `data-material="gestural"` and `data-card-layout="gesture"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=gestural-field) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=gestural-field).

## Aurora Console — `aurora-console`

**Direction:** Aurora UI. A calm product space with a changing horizon of possibility. The visual study uses the original aurora motif; it is decorative, not a service or tool.

**Distinct from `afterhours-fm`:** Subtle bounded aurora ribbons, clear software panels and a left task rail rather than bright media cover blocks.

**Palette:** canvas #1D2635; surface #2A3747; text #E6F1EC; muted #B5CAC7; primary #A6D8CA; on-primary #213A34; decorative secondary #B4BDE2. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 18px. Material: aurora; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `aurora` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-aurora`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `aurora` / `.ex-cards-aurora`; material selector: `.ex-material-aurora`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="aurora"`, `data-material="aurora"` and `data-card-layout="aurora"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=aurora-console) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=aurora-console).

## Signal Ledger — `signal-ledger`

**Direction:** Data-Dense UI. A useful view of the details that matter. The visual study uses the original data motif; it is decorative, not a service or tool.

**Distinct from `excel`:** Compact side summary, actual category/state ledger and selected-note inspector; no workbook formula bar or spreadsheet mimicry.

**Palette:** canvas #ECEFE9; surface #FFFFFF; text #263D35; muted #5A6D65; primary #2E6654; on-primary #FFFFFF; decorative secondary #C9D8CA. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'IBM Plex Mono',monospace display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/24/32/48/64px. Radius 2px. Material: data; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `ledger` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-ledger`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `row` / `.ex-cards-row`; material selector: `.ex-material-data`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="ledger"`, `data-material="data"` and `data-card-layout="row"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=signal-ledger) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=signal-ledger).

## Obsidian Space — `obsidian-space`

**Direction:** OLED Dark Minimal. Room to think, without the noise. The visual study uses the original obsidian motif; it is decorative, not a service or tool.

**Distinct from `commandline`:** Large spatial sans-serif statement and borderless gallery on pure black, rather than terminal prompts and monospace rows.

**Palette:** canvas #000000; surface #101312; text #F0F3EE; muted #AEBAB1; primary #D3DFD4; on-primary #19281D; decorative secondary #708D7C. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/36/32/48/64px. Radius 8px. Material: oled; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `blackout` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-blackout`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `minimal` / `.ex-cards-minimal`; material selector: `.ex-material-oled`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="blackout"`, `data-material="oled"` and `data-card-layout="minimal"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=obsidian-space) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=obsidian-space).

## Optic Interval — `optic-interval`

**Direction:** Op Art. Shift the perspective. Keep the thought clear. The visual study uses the original optic motif; it is decorative, not a service or tool.

**Distinct from `tidal-atlas`:** Static black/ivory interference bands and alternating visual intervals, rather than navigational sea-chart contours.

**Palette:** canvas #F2F2E8; surface #FFFFFF; text #242B2C; muted #636D6B; primary #3C5B6A; on-primary #FFFFFF; decorative secondary #B5C2BD. Use opaque surfaces for reading, and the primary/on-primary pair for actions. Secondary is not a text color.

**Type and rhythm:** 'Be Vietnam Pro',sans-serif display; Be Vietnam Pro body; IBM Plex Mono metadata. Body 16px/1.6; display fluid 42–84px; metadata 10–12px. Spacing 4/8/12/16/28/32/48/64px. Radius 0px. Material: optical; shadow `none`. Strong control borders use the 65% foreground line token; 28% lines are nonessential dividers.

**Composition:** `optical` in `expansion/renderers.js` is the explicit component tree, styled by `.ex-layout-optical`. The mast pairs a brand with the real New project action; project index controls select real records when present. The primary area combines the statement, bounded original SVG and an actual selected project. Preserve this hierarchy when adapting the host. Record grammar: `optical` / `.ex-cards-optical`; material selector: `.ex-material-optical`. Read the matching rules in `expansion/system.css` for placement, borders, panels and hierarchy instead of pasting the whole starter stylesheet.

**Catalog translation:** semantic palette remains identical; `data-composition="optical"`, `data-material="optical"` and `data-card-layout="optical"` select the same composition and record grammar in both demos. Website Demo supplies six entries for its own distinct subject to the shared renderer through its own controller; preserve the canonical composition, topic artwork, search/filter/sort and preview behavior. Read [demo-parity.md](demo-parity.md) for the adapter contract.

**Interaction and responsive:** shared Read/Save/New/filter/search actions retain real state; selected records use aria-pressed, all controls expose focus. Hover transitions last 160ms and stop under prefers-reduced-motion. Below 850px collapse secondary rails; below 600px use source-order single-column flow, 16px inputs and 44px targets, no required horizontal scrolling. Decorative depth uses static SVG/CSS; no WebGL, infinite canvas or media playback is implied. Dialogs use the same canonical tokens. Test 320/390/768/1024/1440px.

**Use:** [Design Lab](https://theme.devoralabs.tech/?theme=optic-interval) · [Website Demo](https://theme.devoralabs.tech/?view=website&theme=optic-interval).
