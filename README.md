# Creative Theme System — AI Agent Skill

A portable skill for creating and integrating **31 selectable website themes**, with working CSS, a safe starter generator, and a complete browser demo. Instructions are in English so different AI agents can reuse them.

**Entry point: [SKILL.md](SKILL.md).** Any agent with filesystem access can read it; agents with an existing application should follow the integration path rather than replacing the app.

**Live demo: [theme.devoralabs.tech](https://theme.devoralabs.tech/)** — explore all 31 themes in the interactive gallery.

## Theme classification

| Family / dropdown group | Count | Styles |
| --- | ---: | --- |
| **Studio** — original art direction | 5 | Botanical (natural), Editorial (magazine), Playroom (soft playful), Midnight (dark elegant), Playful Retro Neo-Brutalism (pastel outlines) |
| **Workspace** — familiar software environments | 9 | Command line, Visual Studio Code, Excel, Canva, Figma, Photoshop, File Explorer, Notion, Burp Suite |
| **Holiday** — seasonal and cultural celebrations | 3 | Halloween, Christmas, Tết Holiday |
| **Creative Lab** — experimental material and layout studies | 14 | Riso Post Office, Tidal Atlas, Type Foundry, Solar Glasshouse, Velvet Orbit, Porcelain Index, Magnetic Poetry, Infrared Herbarium, Night Transit, Paper Circuit, SẮC / 01, Devora Press, Devora Signal, Devora Folio |

Workspace subgroups: **developer & utility** (Command line, Visual Studio Code, Burp Suite); **documents & organization** (Excel, File Explorer, Notion); **design tools** (Canva, Figma, Photoshop). Existing theme IDs and the Botanical default are preserved.

The app-inspired styles are visual references, not integrations with or replicas of those products. Sample products are fictional; SVG artwork is original. The starter includes no store credentials, original product photographs, customer data or payment functionality. Creative Lab contains original compositions for this package; no claim of worldwide novelty or exclusivity is made.

## Theme screenshots

Actual desktop screenshots of the bundled starter, with the same fictional sample content. Click any preview to open the full-size image. The SẮC section also links to its separate original showcase.

| Studio collection | Studio collection |
| --- | --- |
| **01 · Botanical**<br>[![Botanical — warm cream and olive](docs/screenshots/botanical.jpg)](docs/screenshots/botanical.jpg) | **02 · Editorial**<br>[![Editorial — minimal magazine layout](docs/screenshots/editorial.jpg)](docs/screenshots/editorial.jpg) |
| **03 · Playroom**<br>[![Playroom — soft rounded colorful blocks](docs/screenshots/playroom.jpg)](docs/screenshots/playroom.jpg) | **04 · Midnight**<br>[![Midnight — ink surfaces and warm gold](docs/screenshots/midnight.jpg)](docs/screenshots/midnight.jpg) |
| **05 · Playful Retro Neo-Brutalism**<br>[![Retro — pastel blocks, black outlines and hard shadows](docs/screenshots/retro.jpg)](docs/screenshots/retro.jpg) | |

| Creative workspace collection | Creative workspace collection |
| --- | --- |
| **06 · Command line**<br>[![Command line — black, white and gray terminal](docs/screenshots/commandline.jpg)](docs/screenshots/commandline.jpg) | **07 · Visual Studio Code**<br>[![Visual Studio Code — dark editor and syntax accents](docs/screenshots/vscode.jpg)](docs/screenshots/vscode.jpg) |
| **08 · Excel**<br>[![Excel — green workbook and cell grids](docs/screenshots/excel.jpg)](docs/screenshots/excel.jpg) | **09 · Canva**<br>[![Canva — light cyan and purple creative canvas](docs/screenshots/canva.jpg)](docs/screenshots/canva.jpg) |
| **10 · Figma**<br>[![Figma — dotted canvas and purple selection frames](docs/screenshots/figma.jpg)](docs/screenshots/figma.jpg) | **11 · Photoshop**<br>[![Photoshop — charcoal panels and transparency canvas](docs/screenshots/photoshop.jpg)](docs/screenshots/photoshop.jpg) |
| **12 · File Explorer**<br>[![File Explorer — light file library and yellow folders](docs/screenshots/file-explorer.jpg)](docs/screenshots/file-explorer.jpg) | **13 · Notion**<br>[![Notion — warm white document workspace](docs/screenshots/notion.jpg)](docs/screenshots/notion.jpg) |
| **14 · Burp Suite**<br>[![Burp Suite — charcoal utility panels and orange accents](docs/screenshots/burpsuite.jpg)](docs/screenshots/burpsuite.jpg) | |

| Holiday collection | Holiday collection |
| --- | --- |
| **15 · Halloween**<br>[![Halloween — plum, pumpkin orange and an original pumpkin illustration](docs/screenshots/halloween.jpg)](docs/screenshots/halloween.jpg) | **16 · Christmas**<br>[![Christmas — evergreen, ivory, red ribbons and gold stars](docs/screenshots/christmas.jpg)](docs/screenshots/christmas.jpg) |
| **17 · Tết Holiday**<br>[![Tết Holiday — Vietnamese New Year red, gold and apricot blossoms](docs/screenshots/tet.jpg)](docs/screenshots/tet.jpg) | |

Holiday themes are selected manually and use the same shared demo state. They do not trigger calendar changes, promotions or external integrations.

## Creative Lab themes

Ten material-led directions, with scoped tokens, responsive compositions and the same functional sample collection.

| Creative Lab | Creative Lab |
| --- | --- |
| **18 · Riso Post Office**<br>[![Riso Post Office — Vermilion ink, postal perforations and offset paper](docs/screenshots/riso-post.jpg)](docs/screenshots/riso-post.jpg) | **19 · Tidal Atlas**<br>[![Tidal Atlas — Deep sea contours, chart coordinates and tide-blue frames](docs/screenshots/tidal-atlas.jpg)](docs/screenshots/tidal-atlas.jpg) |
| **20 · Type Foundry**<br>[![Type Foundry — Acid yellow, oversized type and a typesetter specimen grid](docs/screenshots/type-foundry.jpg)](docs/screenshots/type-foundry.jpg) | **21 · Solar Glasshouse**<br>[![Solar Glasshouse — Transparent green panes, structural ribs and warm citrus](docs/screenshots/solar-glass.jpg)](docs/screenshots/solar-glass.jpg) |
| **22 · Velvet Orbit**<br>[![Velvet Orbit — Aubergine velvet, copper orbital rings and curved gallery cards](docs/screenshots/velvet-orbit.jpg)](docs/screenshots/velvet-orbit.jpg) | **23 · Porcelain Index**<br>[![Porcelain Index — Cobalt ceramic tiles, fine blue borders and museum labels](docs/screenshots/porcelain.jpg)](docs/screenshots/porcelain.jpg) |
| **24 · Magnetic Poetry**<br>[![Magnetic Poetry — Scattered word tiles, fridge-silver surfaces and cherry magnets](docs/screenshots/magnetic-poetry.jpg)](docs/screenshots/magnetic-poetry.jpg) | **25 · Infrared Herbarium**<br>[![Infrared Herbarium — Hot pink specimen sheets and dark botanical registration marks](docs/screenshots/infrared.jpg)](docs/screenshots/infrared.jpg) |
| **26 · Night Transit**<br>[![Night Transit — Midnight navy, route diagrams and amber ticket details](docs/screenshots/night-transit.jpg)](docs/screenshots/night-transit.jpg) | **27 · Paper Circuit**<br>[![Paper Circuit — Folded drafting paper, electric blue traces and lime contacts](docs/screenshots/paper-circuit.jpg)](docs/screenshots/paper-circuit.jpg) |

## SẮC / 01 personal signature

**28 · SẮC / 01 — Paper / Brutalist:** monochrome paper, bold typography, square retro windows, hard black shadows and a small red accent. Included in the Creative Lab dropdown. [Read its integration recipe](references/sac-01.md) or serve the [standalone showcase](assets/sac-01).

[![SẮC / 01 shared catalog preview](docs/screenshots/sac-01.jpg)](docs/screenshots/sac-01.jpg)

## Devora Press personal theme

**29 · Devora Press:** warm paper, persimmon actions, cobalt navigation, sage highlights, a cut-corner identity tile, and restrained hard shadows. [Read the design specification](references/devora-press.md) or serve `assets/devora-press/` and open `showcase.html` for the original interactive light/night showcase. The catalog registers the light appearance and preserves the existing default and theme controller.

[![Devora Press — original workspace showcase](docs/screenshots/devora-press-workspace.png)](docs/screenshots/devora-press-workspace.png)

[Shared catalog preview](docs/screenshots/devora-press-catalog.png) · [Night appearance](docs/screenshots/devora-press-night.png) · [Mobile layout](docs/screenshots/devora-press-mobile.png)

Devora Press verification: the original showcase passed layout checks at 320, 390, 768, 1024 and 1168px in both appearances and both views. All 28 designated text/background token pairs reached at least 4.73:1 contrast. Idea creation, empty-name validation, Vietnamese and special-character input, Escape dismissal, focus restoration and reduced motion were exercised. The catalog passed layout checks at 320, 390, 768, 1024 and 1440px, all 29 theme transitions with search preserved, URL/hash preservation, reload, dialogs, empty state and mobile navigation. These checks cover the supplied samples, not every future host application.

## Devora Signal and Devora Folio

Two white/red/black personal signatures with English interface copy. [Read their design and integration rules](references/devora-signatures.md).

| Devora Signal | Devora Folio |
| --- | --- |
| **30 · Signal:** a square, flat workbench with a black rail, red index tab and ruled project rows. | **31 · Folio:** an open editorial workspace with top navigation, a red notebook spine and soft collection cards. |
| [![Devora Signal original workspace](docs/screenshots/devora-signal.png)](docs/screenshots/devora-signal.png) | [![Devora Folio original workspace](docs/screenshots/devora-folio.png)](docs/screenshots/devora-folio.png) |

Serve the repository root and open `assets/devora-signal/index.html` or `assets/devora-folio/index.html` for their original interactive showcases. Both appear in the Creative Lab catalog dropdown. Portable tokens and shared component CSS are included; the previous default and all existing themes remain available.

[Signal mobile](docs/screenshots/devora-signal-mobile.png) · [Folio mobile](docs/screenshots/devora-folio-mobile.png)

Signal/Folio verification: both original showcases passed horizontal layout and text-bound checks at 320, 390, 768, 1024 and 1168px in their workspace and component views (20 combinations). All 20 designated text/background pairs reached at least 5.15:1 contrast. Idea creation, empty-name errors, long and special-character titles, slug validation/reset, dialogs, Escape, return focus, visible focus and reduced motion were exercised. Both catalog adaptations passed at 320, 390, 768, 1024 and 1440px with sample images loaded. All 31 theme transitions preserved search, filter and sort; stored selection, mobile navigation, dialogs and empty states were checked for the two additions. These checks apply to the supplied examples, not arbitrary future host apps.

## Use with an AI agent

```text
Read SKILL.md in this repository. Add the Command line and Retro themes to my
existing app using its current theme provider and selector. Preserve all existing
themes and business behavior. Verify desktop/mobile and report what you tested.
```

For Codex, copy this repository's contents, excluding `.git`, into `~/.codex/skills/creative-theme-system/`, then invoke `$creative-theme-system`. Other agents can read `SKILL.md` directly and follow the linked references. No connector or account is required for local theme work.

## Run the demo

Requires Node.js 18 or later. No dependencies or build step.

```sh
node scripts/create_demo.mjs ../theme-demo
node scripts/validate_demo.mjs ../theme-demo
node scripts/serve.mjs ../theme-demo --port 4173
```

Open `http://127.0.0.1:4173/?theme=commandline`. Use the dropdown to switch themes. Sample cards open a preview dialog; search, filtering and sample sorting work across selections. Fonts load optionally from Google Fonts with system fallbacks.

The generator refuses non-empty destinations. The preview server binds only to localhost. Publishing is optional and requires the user's authorization; [publishing guidance](references/publishing.md) covers GitHub/Vercel without embedding accounts or tokens.

## Deploy the live gallery on Vercel

The root `vercel.json` publishes `assets/starter/` as the website. It uses the Other framework preset, skips dependency installation and builds, and serves the existing 31-theme demo at `/`. Import this GitHub repository into Vercel with the repository root as Root Directory; keep the included settings. No environment variables or backend are required.

The official demo is hosted at [theme.devoralabs.tech](https://theme.devoralabs.tech/). The theme dropdown preserves the shared demo state. Share a selected theme directly, such as [Devora Signal](https://theme.devoralabs.tech/?theme=devora-signal) or [Devora Folio](https://theme.devoralabs.tech/?theme=devora-folio), using `?theme=` with any registered theme ID. The catalog is an English fictional demonstration, with no checkout or real product sales. Standalone signature showcases remain available in the repository; only the shared catalog is published by this configuration.

For a CLI deployment from this repository root:

```sh
npx vercel link
npx vercel git connect https://github.com/devoralabsapp/creative-theme-system-skill.git
npx vercel deploy --prod
```

Use the intended Vercel account/team and existing project when already linked. The local `.vercel/` link is ignored by Git. `.vercelignore` omits skill instructions, documentation and standalone source showcases from CLI uploads; Vercel only serves the configured output folder. The Git connection supports subsequent deployments from the production branch.

## Layout

- `SKILL.md` — agent instructions and routing.
- `references/` — recipes, integration, validation and optional publishing.
- `assets/starter/` — reusable demo with original SVG sample assets.
- `scripts/` — dependency-free generation, serving and static verification.
- `agents/openai.yaml` — Codex discovery metadata.

Static validation checks registry metadata, assets, UI hooks and script syntax. Browser review remains necessary; see [verification](references/verification.md).

Prior package verification: all 28 theme selections and sample search across theme changes were checked in a browser. All themes were checked at 320px, 390px and 768px; the original ten experimental Creative Lab themes also passed filter/sort persistence, preview-dialog and text-bound checks. Stored selection, invalid-theme fallback, URL/hash preservation, empty state and mobile navigation were exercised. Earlier package checks verified that the generator refuses occupied destinations, the validator rejects duplicate IDs, and the localhost server rejects POST and hidden-file requests. Static validation and these browser checks do not constitute a full accessibility audit.
