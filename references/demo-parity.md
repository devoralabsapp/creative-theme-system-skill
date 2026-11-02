# Design Lab and Website Demo — shared visual identity

The two previews use the same composition factories and canonical style sheets for every registry theme. Website Demo adapts 101 distinct English website subjects to those compositions, one subject per registry theme. The requested 90% resemblance is a visual target, not a measured screenshot-similarity claim.

## Sources

- `assets/starter/shared-layouts.js` holds the original composition functions extracted from Lab. `createStudioRenderers(ui)` also registers Volume Five and expansion renderers.
- `lab/volume-five.js`, `lab/volume-five-revision.js` and `expansion/renderers.js` hold their existing explicit composition trees. `ui.assetBase` resolves the same original scenes from the Lab subdirectory and website root before the Website subject adapter selects its scene.
- Both HTML entries load `lab/tokens.css`, `lab/profiles.css`, holiday/Volume Five tokens, `lab/lab.css`, the Lab layout sheets, Pixel Riot rules and expansion styles in the same order.
- `lab/lab.js` remains the independent project controller. Website `demo.js` owns separate per-theme sessions: six subject entries, selected entry, bookmarks, query, category and sort order. `themes.js` remains its registry/URL controller.
- `catalog.css` adapts product artwork, search/sort controls, preview dialogs and a compact informational footer inside the shared composition. It does not replace a theme's hero/sidebar/grid with another landing page.

The previous catalog-only CSS and recipe assets remain packaged for existing integrations. The current `website.html` uses the shared Lab style stack; consult that entry and these factories when reproducing the current demo.

## Adapter contract

Supply escaped data through `visible`, `current`, `projects`, `meta` and `badge`. Supply real actions through `openButton`, `saveButton`, `newButton`, `filters`, `search` and `toolbar`. Keep application state in the caller. The historical `projects` argument is a record interface; Website Demo provides product records with the same shape.

The editorial source `docs/site-demos/concepts.json` contains all 101 brands, subjects, headlines, introductions, category labels and six detailed entries per site. Run `node scripts/build_site_demos.mjs` to generate `assets/starter/site-registry.js`, the subject catalog at [WEBSITE_TOPICS.md](../docs/WEBSITE_TOPICS.md), and seven original native SVGs per site. `scripts/lib/site-art.mjs` defines subject motifs using each Lab's canonical palette and rejects unknown motifs.

The Website adapter keeps each template's component tree and heading emphasis/line breaks, replaces Lab copy with subject copy, and inserts subject artwork inside the existing scene/card wrappers. Brand, entry action, search placeholder, filter labels, detail dialog and informational footer all come from the active site. Data is escaped before interpolation. The original Lab controller/data and canonical styles stay unchanged.

A theme's first visit starts with all six entries. Returning restores that topic's query, filters, sort order, selection and saved entries for the current page session. Refreshing clears these in-memory sessions. Lab state stays separate. Entry actions open actual authored details and matching topic artwork. Brands and listings are fictional; the demo has no live sales, bookings, downloads or streams.

Preserve `#theme-select` and the same-origin preview bridge. The parent owns theme selection and scrolling; each child retains its own data/query state. Keep the stable header tabs, inset focus treatment, native dropdown arrow spacing and All gallery styling.

## Verification

`node scripts/verify_catalog_parity.cjs` compares all registered themes in actual browsers: the first composition nodes and eleven canonical roles must match Lab. It checks Website Demo at 320/390/768/1024/1440px and exercises two subject categories, brand/headline, query, authored details and topic artwork/dialog, bookmarks, alphabetical sort, empty state and reset for every theme. The existing Excel workbook keeps its bounded horizontal table. Card copy is also checked for unusably narrow columns.

`node scripts/verify_site_subjects.cjs` compares actual record padding, borders, radius, background, display and shadow against Lab for every theme, and tests per-topic state through the native dropdown. Legacy `.product` rules in expansion/Pixel Riot styles exclude `[data-project-id]` records, so the shared cards retain their canonical style instead of receiving both catalog and Lab treatments.

Run `verify_preservation.cjs` for the original fifty Lab token/structure samples, `verify_explorer.cjs` for retained independent sessions and the shared picker/scroll bridge, and `verify_collection.cjs` for long/escaped Lab content and catalog navigation. Static validation checks local references, required assets and runtime syntax. The skill validator checks skill metadata separately.

Actual captures are shown in [the side-by-side comparison](../docs/screenshots/demo-parity.jpg). Contrast remains based on the shared semantic palette; these checks are not a full assistive-technology/accessibility certification.
