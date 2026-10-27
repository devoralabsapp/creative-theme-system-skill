# Holiday identities

Use these recipes for Halloween, Christmas, Tết Holiday and Black Friday. Each has a distinct working composition in Design Lab and an adaptation to Website Demo. Preserve the stable IDs `halloween`, `christmas`, `tet` and `black-friday`.

## Sources

- `assets/starter/holiday-tokens.css` is the shared canonical palette for these four themes, using the Lab semantic roles. Map those roles to the host provider.
- `assets/starter/lab/holiday-layouts.css` and the four named renderers in `lab.js` demonstrate the working project layouts.
- `assets/starter/holiday-themes.css` adapts those identities to the catalog. `themes.js` changes only its presentation copy and decorative scene; search, filters, sorting, sample prices and business actions remain intact.
- `assets/starter/assets/holidays/` contains original SVG scenes. They are decorative, static and have no remote dependencies. Preserve aspect ratios and keep ornaments clear of readable text and controls.

## Halloween — the curiosity cabinet

Midnight plum `#151019`, panel `#241B2C`, warm paper text `#FFF3DC`, pumpkin orange `#FFAB4A` and pale lilac. Fredoka display type pairs with Nunito. This is a playful night collection, not a generic dark dashboard.

A broad, asymmetric introduction faces a moonlit pumpkin/ghost illustration. A selected curiosity and an orange collection-count tile form a second row. The project cabinet uses tall arched cards, crescent details and rounded controls. The catalog carries the same large illustration and arched product frames. Keep artwork friendly; avoid flashes, jump scares or simulated system warnings. Actual project counts come from the collection.

## Christmas — the giving room

Warm paper `#F5F1E8`, evergreen `#183F35`, red ribbon `#A92F3A` and a gold `#E8C279` detail. Playfair Display gives the heading a printed greeting-card quality; DM Sans handles reading text.

A forest-green room holds an illustrated paper tree, ornaments and wrapped gifts. The selected project becomes an ivory letter below it; the remaining notes use flat wrapping-paper cards with restrained ribbon crossings. Ribbons occupy a reserved band and never cross text. The website hero is a green greeting-card spread, while product cards retain their actual sample imagery beneath the wrapping band. Keep the scene static and use opaque surfaces for reading.

## Tết Holiday — the house of new beginnings

Lacquer red `#A6222B`, deep-red panels `#8F1A26`, cream `#FFF1D0` and gold `#F4D17B`. Playfair Display headlines pair with Be Vietnam Pro interface text. Preserve the accent in the theme name “Tết”; the demonstration copy is English.

A red-and-gold opening pairs large new-beginnings typography with five-petal apricot blossoms, a lucky envelope and a green bánh chưng motif. A cream selected-note panel contrasts with the red canvas. The collection uses envelope-shaped notes and gold diamond seals. These Vietnamese New Year material cues distinguish it from Christmas wrapping and from a generic red/gold celebration. Avoid zodiac animals, hard-coded years or invented holiday dates unless the user supplies them. Do not borrow another culture's scripts or imply that decorative seals are working controls.

## Black Friday — the creative edit

Black `#101010`, near-white `#F5F3EB` and vivid red `#FF4B3E`, with black text on the red action surface. Heavy Be Vietnam Pro type, square geometry and fine gray rules. This is a high-contrast typographic direction, not an automatic promotion engine.

Use an oversized two-line Black Friday masthead beside an ivory receipt-shaped selected note. Perforation, a static barcode graphic and short record metadata establish the print language. The lower collection is a dense ruled working index, rather than another card grid. In the website version, a tilted original poster and two-column product edit express the same direction. Keep receipts tied to real displayed records; the barcode is decorative. Never invent discounts, crossed-out prices, stock scarcity, sales totals, checkout capabilities or ticking countdowns.

## Apply and verify

Holiday selection is manual. Do not change a user's theme with the calendar. An existing host should retain its localization and content; English sample headings are not business copy to overwrite into the host. Adapt layouts to actual functions and preserve filters, forms, user state and existing defaults.

Check both views, all four palettes, phone reflow, readable muted text, primary/secondary/focus states, dialogs and empty results. On narrow screens, illustrations stack below the introduction and every record remains readable. Keep the shared explorer's single selection authority and outer-page scroll ownership intact. Asset presence and a successful build are not a substitute for rendered browser checks.
