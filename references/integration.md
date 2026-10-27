# Integrate without replacing the app

Locate the existing theme registry/provider, root selector, CSS imports/layers, selector UI, persistence key, default and localization keys. Inspect representative screens, dialogs and mobile navigation.

For React/Next/Vue/Svelte, extend the existing provider/store and SSR/cookie/client bootstrap strategy. Do not add a second provider, read storage on the server or introduce hydration mismatches. Preserve CSP and its nonce mechanism when early inline scripts are needed.

## Standalone contract

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
