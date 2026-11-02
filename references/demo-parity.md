# Design Lab and Website Demo — shared visual identity

The two previews use the same composition factories and canonical style sheets for every registry theme. Website Demo adapts real sample-product records to those compositions instead of applying a different generic landing page. The requested 90% resemblance is a visual target, not a measured screenshot-similarity claim.

## Sources

- `assets/starter/shared-layouts.js` holds the original composition functions extracted from Lab. `createStudioRenderers(ui)` also registers Volume Five and expansion renderers.
- `lab/volume-five.js`, `lab/volume-five-revision.js` and `expansion/renderers.js` hold their existing explicit composition trees. `ui.assetBase` resolves the same original scenes from the Lab subdirectory and website root.
- Both HTML entries load `lab/tokens.css`, `lab/profiles.css`, holiday/Volume Five tokens, `lab/lab.css`, the Lab layout sheets, Pixel Riot rules and expansion styles in the same order.
- `lab/lab.js` remains the independent project controller. Website `demo.js` owns the nine original sample products, selected product, session bookmarks, query, category and sort order. `themes.js` remains its registry/URL controller.
- `catalog.css` adapts product artwork, search/sort controls, preview dialogs and a compact informational footer inside the shared composition. It does not replace a theme's hero/sidebar/grid with another landing page.

The previous catalog-only CSS and recipe assets remain packaged for existing integrations. The current `website.html` uses the shared Lab style stack; consult that entry and these factories when reproducing the current demo.

## Adapter contract

Supply escaped data through `visible`, `current`, `projects`, `meta` and `badge`. Supply real actions through `openButton`, `saveButton`, `newButton`, `filters`, `search` and `toolbar`. Keep application state in the caller. The historical `projects` argument is a record interface; Website Demo provides product records with the same shape.

Website rows retain the original product names, categories, ranks and SVG artwork. Product previews show the actual selected sample. Save toggles a browser-session bookmark; no checkout, download or account service is implied. A small text-node translation adapts project nouns to sample nouns; search values are escaped independently. Product images are inserted into the existing visual card treatment, while table/folder compositions retain their distinct record layouts.

Preserve `#theme-select` and the same-origin preview bridge. The parent owns theme selection and scrolling; each child retains its own data/query state. Keep the stable header tabs, inset focus treatment, native dropdown arrow spacing and All gallery styling.

## Verification

`node scripts/verify_catalog_parity.cjs` compares all registered themes in actual browsers: the first composition nodes and eleven canonical roles must match Lab. It checks Website Demo at 320/390/768/1024/1440px and exercises category filters, query, actual artwork/dialog, bookmarks, alphabetical sort, empty state and reset for every theme. The existing Excel workbook keeps its bounded horizontal table.

Run `verify_preservation.cjs` for the original fifty Lab token/structure samples, `verify_explorer.cjs` for retained independent sessions and the shared picker/scroll bridge, and `verify_collection.cjs` for long/escaped Lab content and catalog navigation. Static validation checks local references, required assets and runtime syntax. The skill validator checks skill metadata separately.

Actual captures are shown in [the side-by-side comparison](../docs/screenshots/demo-parity.jpg). Contrast remains based on the shared semantic palette; these checks are not a full assistive-technology/accessibility certification.
