# Theme implementation guide

## Preserve the host

Use the current registry, provider, escaped Lab project helpers and catalog controller. Do not replace the app, add a backend, recolor user artwork or change old IDs/default/order. The audit snapshot is the preservation baseline.

## Theme contract

Each expansion design defines an ID/name/style/phase, seven semantic colors, typography, spacing, border/radius/shadow material, composition tree, record grammar, original motif, philosophical headline and similarity rationale. `docs/expansion/designs.json` is the reviewed plan; only completed batch definitions are installed in the runtime registry.

Design Lab demonstrates canonical palette roles and one working composition per theme. Theme-specific art stays decorative and bounded. Data labels/counts come from actual records. Keep controls at least 44px, phone inputs 16px, visible focus, escaped text, close/cancel and reduced-motion fallbacks.

## Batch completion

Add designs through the expansion build helper, validate IDs/assets/references/JS, capture real Lab previews, run both-view responsive and interaction checks, inspect the contact sheet, update agent recipes and dynamic docs, commit/push, then verify the existing production domain. Record observations in progress; never claim unrun checks.

## File map and host adaptation

| Responsibility | File | Contract |
| --- | --- | --- |
| Selection authority | `assets/starter/theme-registry.js` | Stable IDs, four families, existing URL/local storage priority. New metadata is additive. |
| Reviewed design source | `docs/expansion/designs.json` | Palette, typography, material, explicit composition, card grammar, original motif and nearest-neighbor rationale. |
| Completed runtime definitions | `assets/starter/expansion/themes.js` | Generated subset of completed phases; no separate provider or project state. |
| Canonical colors/type | `assets/starter/expansion/tokens.css` | Shared semantic roles for Lab and catalog, scoped by stable theme ID. |
| Lab composition trees | `assets/starter/expansion/renderers.js` | Receive the existing escaped data/actions. Keep search/filter/selected/save/create state in `lab.js`. |
| Layout/material/record rules | `assets/starter/expansion/system.css` | Scope new Lab selectors with `.ex-` and catalog overrides with `data-expansion=true`. |
| Original vector studies | `scripts/lib/expansion-art.mjs` → `assets/starter/assets/expansion/` | Bounded decorative scenes; no third-party logos, unsupported service controls or generated metrics. |
| Discovery and screenshots | `all-themes.js`, `theme-picker.js`, `assets/previews/`, README | Enumerate registry entries; add style/tags to search, never a second hardcoded theme list. |

In a real application, map `--lab-background/surface/foreground/muted/line/accent/on-accent/focus/radius/shadow` to the host's semantic tokens. Use `--lab-display`, `--lab-font`, `--lab-mono` for display, body and metadata. `--ex-secondary` is decorative. Keep meaningful text on an opaque surface; glass and optical effects belong behind or beside content. The catalog maps these same roles to its existing `--paper`, `--ink` and `--ws-*` tokens. Keep product images unchanged.

Set the selected ID before first paint using the host's bootstrap/SSR strategy. Apply optional expansion/composition/material/card-layout metadata whenever a selection changes, and clear it when returning to an original theme. Keep the existing storage key and valid URL precedence. Inside the explorer, the parent owns theme selection and the existing validated bridge keeps iframes synchronized without echo messages or a second scroll owner.

## Extending the collection

1. Audit the requested style against `THEME_CATALOG.md`. Record its nearest existing identity and a material/composition difference beyond color or type.
2. Add a full source definition and an explicit composition function. Reuse the small feature/index/facts/reading primitives; compose them deliberately. Add a new record grammar or justified material rules where needed.
3. Add an original SVG motif generator or a supplied licensed asset. Keep art decorative, responsive and separate from functional text.
4. Run `node scripts/add_expansion_phase.mjs <phase>` for this expansion, then `node scripts/update_theme_docs.mjs`. The batch helper refuses to rewind completed phases or overwrite unrelated host themes. Its phase range is intentionally limited to this reviewed migration; expand it deliberately for a later migration rather than resetting the original baseline.
5. Capture real working previews, inspect desktop and phone states, update the matching recipe, and validate. Do not register planned definitions as completed themes.

The generated token/runtime/phase-recipe files should be changed through the source definition and generator, not hand-edited independently. Original references remain hand-maintained. Adding another composition must not replace the host controller or mutate the protected original fifty definitions.

## Reproducible verification

```sh
node scripts/validate_demo.mjs assets/starter
node scripts/validate_expansion.mjs
node scripts/serve.mjs assets/starter --port 4183
# In another terminal, with Playwright and a Chromium executable available:
node scripts/verify_expansion.cjs all
node scripts/verify_explorer.cjs
node scripts/verify_preservation.cjs
node scripts/verify_collection.cjs
```

The browser scripts accept `PLAYWRIGHT_MODULE`, `CHROMIUM_EXECUTABLE` and `DEMO_URL`. They do not install dependencies or change production. Screenshots and diagnostics go to ignored `.qa/`; actual gallery/README captures go to their public image folders. `verify_expansion.cjs <phase>` checks one batch. The full run checks every registered theme in both views at 320/390/768/1024/1440px. Contrast sampling covers expansion text and controls; decorative art is excluded. Native controls, font fallbacks, assistive technology and every possible product state still need a broader accessibility review.

After an authorized Git push, `node scripts/verify_production.cjs <phase>` requires a successful Vercel commit status and compares the live registry and expansion files with **committed HEAD**, then opens original/latest deep links in both demo views. A pending deployment is a retry condition, not proof of release. Keep the current project/domain and never force-push.

## Design Lab composition source

`shared-layouts.js` contains the Design Lab render functions. Their caller supplies project data and actions. Adapt the composition and styles to the host’s own controller.
