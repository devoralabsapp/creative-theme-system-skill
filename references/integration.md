# Integrate without replacing the app

Locate the existing theme registry/provider, root selector, CSS imports/layers, selector UI, persistence key, default and localization keys. Inspect representative screens, dialogs and mobile navigation.

For React/Next/Vue/Svelte, extend the existing provider/store and SSR/cookie/client bootstrap strategy. Do not add a second provider, read storage on the server or introduce hydration mismatches. Preserve CSP and its nonce mechanism when early inline scripts are needed.

## Standalone contract

`index.html`, `explorer.css` and `explorer.js` form the demo-only three-tab shell. Design Lab is the default; `?view=all` selects the categorized overview and `?view=website` selects Website Demo. The retained same-origin frames are `lab/index.html` and `website.html`, allowing each preview to preserve its in-memory content and filters. `preview-bridge.js` synchronizes only validated theme IDs, intrinsic content height and local anchor navigation, checking both origin and source window. This shell is for comparing demos, not a replacement theme provider for a host app.

`theme-picker.js` progressively enhances the shell's native selector with a searchable, grouped popover. It uses the same selector's change event rather than creating another selection store. The shell emits `theme:sync` when URL or preview initialization updates selection; this notification must not echo a new change. The Devoralabs mark in `assets/devoralabs-mark.svg` is shared by the shell header and demo favicons.

`theme-registry.js` is the single data registry. Records contain `id`, `name`, `description`, browser `color`, `tone`, `family` (`studio`, `workspace`, `seasonal` or `creative`), and optionally a three-string decorative `workspace` array for the workspace family.

`theme-bootstrap.js` validates `?theme=`, then saved selection, then default before styles paint. Storage failure falls back cleanly. Invalid IDs never become selectors or executable code.

`themes.js` derives four dropdown groups from the registry, updates root `data-theme`, `data-family`, `data-workspace`, `data-tone`, announces selection, updates browser theme color and saves explicit selections. It preserves other query parameters, hashes and catalog state. The legacy `data-workspace` attribute enables shared semantic component styles for all non-studio families; seasonal and creative CSS hide editor chrome.

`styles.css` is the baseline layout. `themes.css` contains the first five themes plus shared gallery rules. `workspace-themes.css` adds the first six workspace themes and shared semantic component rules. `additional-themes.css` adds three more workspaces and three holidays. `creative-themes.css` adds ten experimental compositions and shared Creative Lab geometry. `sac-theme.css` adds the SẮC / 01 signature, scoped to `data-theme="sac-01"`. These selectors target the starter DOM; **do not import them blindly into an unrelated app**.

## Existing app workflow

1. Add a stable ID and localized label to the current registry and selector.
2. Translate recipe colors into theme-scoped semantic tokens. Preserve existing defaults.
3. Adapt optional geometry/decorations to real components. Do not add a hero/sidebar merely because the reference has one.
4. Check dialogs, inputs, tables, overlays, statuses, empty/error/loading states.
5. Verify old themes, reload, navigation and user-state persistence.

Example token adaptation (use the actual host variable names):

```css
html[data-theme="commandline"] {
  --background: #000;
  --surface: #101010;
  --foreground: #f0f0f0;
  --muted-foreground: #a8a8a8;
  --border: #343434;
  --accent: #e7e7e7;
  --accent-foreground: #080808;
  --font-body: Consolas, "Courier New", monospace;
}
```

Scope theme overrides, including media and reduced-motion rules. Shared rules are allowed only when intentionally system-wide or confined to a marked family. Keep real controls semantic. Decorative rails, file labels and handles are `aria-hidden`; avoid fake Save/Export/Login controls. Keep keyboard access, focus and contrast.

Fix overflow through wrapping, widths and grid minimums. Do not hide content defects with root overflow clipping; clip decorative artwork only when intentional.

`devora-press-theme.css` adds the Devora Press personal theme with scoped semantic tokens and catalog-specific rules. `assets/devora-press/` holds its independent light/night showcase and portable assets; the starter catalog registers the light appearance.

`devora-duo-theme.css` adds the scoped white/red/black Signal and Folio signatures. Portable per-theme tokens are in `assets/devora-signal/` and `assets/devora-folio/`, with shared component examples in `assets/devora-signatures/`. The separate original showcases use English copy and local-only interactions.

`avant-theme.css` adapts the seven Design Lab directions to the shared catalog; `lab/tokens.css` is their canonical semantic palette. `lab/` is also a self-contained browser-local project workspace served at `/lab/`, with separate per-theme compositions and real demo interactions. Its state is independent of the catalog provider, never imported into a host app as production business logic. See `design-lab.md` for choosing the appropriate source.

`lab/profiles.css` supplies the 28 non-holiday Lab palettes and typography, adapted from their catalog tokens with readable muted roles. `lab/profile-layouts.css` contains their family compositions. `lab/tokens.css` retains the seven experimental palettes. All 39 IDs use the existing registry and selection storage key. The Lab picker groups the same four families as Website Demo.

`holiday-tokens.css` defines the four holiday palettes used by both previews. Load it after baseline profiles. `lab/holiday-layouts.css` supplies separate Halloween, Christmas, Tết and Black Friday working compositions; `holiday-themes.css` applies their catalog treatments after other catalog styles. See `holidays.md`.

`all-themes.js` builds the overview from the existing registry, with a real preview image at `assets/previews/<theme-id>.jpg` for each theme. `all-themes.css` is isolated to that view. Gallery links are real theme URLs; ordinary clicks use the shell selection authority and preserve mounted preview sessions. Card navigation supports browser Back, and each view retains its own scroll position. The overview keeps its search and collection filter while hidden. Refresh the matching preview image after a visual theme change; capture the actual Lab rather than generating an approximate mockup.
