# Meaningful verification

Run the host app's relevant existing checks. For the generated starter:

```sh
node scripts/validate_demo.mjs /absolute/path/to/demo
```

This parses registry data without evaluating it, checks assets and script syntax. It is not visual or full accessibility verification.

Use the environment's supported browser tools. When layout changes, sample 320px/390px phones, 768px tablet and desktop. Scale the matrix to the real change.

- Open each requested theme by URL; check selection, root state, contrast, imagery, card text and controls.
- Switch a dark workspace theme back to an original light theme; rails and title bars must disappear.
- Search/filter/sort before switching; results and user input must survive. Verify real navigation/checkout destinations without ordering.
- Reload/reopen without `?theme=`. Check invalid values and storage failure. Do not reset an existing app's storage key.
- Check keyboard use, mobile menu, focus, reduced motion, a dialog and an empty state.
- For the explorer, change themes rapidly while a preview is still loading. After settling, the dropdown, URL and both previews must agree on the last selection and remain stable. Changing a theme from mid-page should reveal its new composition from the top without resetting project/filter state.
- Test real wheel input with the pointer over preview content on desktop and a narrow viewport. The first gesture must move the outer page, with no inner frame scroll or second scrollbar. Check the last content and dialogs still fit, and test each tab's independent scroll position.
- Inspect document width **and text/card bounds**: `scrollWidth` alone can hide defects under `overflow: clip`.
- Verify image loads. Do not use placeholders to claim real assets were verified.
- Remove temporary QA routes before publication; confirm final source excludes them and check 404 when relevant.

The sample dialog is a preview, not checkout/download functionality. Report actual checks and unverified limits. Save representative screenshots when useful. A successful hosting build does not prove a working browser UI.

For All, confirm one card per registry ID, correct family counts, real images with no broken assets, search/filter/empty reset, and every card destination. Verify returning from Lab and browser Back preserve the overview state, keyboard arrows work across all three tabs, and a fresh root visit defaults to All even with a saved theme; direct `?theme=` links and explicit Lab/Website views must remain functional. Check a single outer scrollbar in the gallery and previews.
