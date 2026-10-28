## GTA V Manager Changelog

* * *

### v0.22.0 (2026-10-28)
* Look:
  * Add: backgrounds on every page, not only Home (⋮ → Backgrounds): pick which ones are shown, how often the picture changes (never, every 1 to 60 minutes, with a soft fade) and whether it shows on every page. A new Los Santos day-and-night picture.
  * Add: your own background (logged in): the window says the right format (landscape, ideally 16:9, at least 1280 px wide); the picture is cut to 16:9, made smaller and saved only in your own repository.
* Vehicle Manager:
  * Change: in the ⋮ menu, the Cars and Garages import / export take one line, Import/Export, which opens by itself under the mouse (a tap on a phone).
* Job Manager:
  * Fix: the Job Manager map no longer leaves empty blocks on Android phones.
  * Change: the Agency pin looks like the Production Manager pins (round, with the office safe ring, the name and the safe under it).
  * Change: placing the pin: move the map under the circle in the middle and press Put it here.
  * Add: the four map styles (Satellite, Atlas, Road, Dark) in the Job Manager map.

### v0.21.0 (2026-10-28)
* Job Manager:
  * Change: the Agency page is now two small cards: Security Contracts (the office safe and the contracts, as before) and Dr. Dre Contract.
  * Add: the Dr. Dre Contract page (also from the HEISTS card): the 13 missions by stage with ticks and a short tip each for the fastest way, the fastest order, progress, what the finale pays now ($1,099,800 on the week's first finale, then $900,000) and a bell when it can be replayed (about 48 minutes). The two setups are done once and skipped on replays.
* Vehicle Manager:
  * Fix: the garage and car windows no longer close on a click outside while they have unsaved changes; a click outside, ✕ or Esc asks Save / Discard / Stay.
  * Add: a vehicle type of your own (e.g. a bicycle): ➕ Another type… in the car window, with a name and an emoji; it shows on the card and in the type filter.

### v0.20.0 (2026-10-28)
* Job Manager:
  * Add: the Agency page (from the Agency card): owned, area (4 Agencies with prices), the office safe and the Security Contracts.
  * Add: Agency safe like the Nightclub's: it fills while “In game” is on, by what the Security Contracts done give ($500 a day for every 5, up to $20,000), holds $250,000; the amount, the contracts and the daily value can be typed or slid; a bell when it is nearly full and when it is full.
  * Add: “I finished a contract”: counts it and rings after the 5 minutes between two Security Contracts.
  * Add: the Job Manager map: a round button at the bottom right grows into a medium window with the map and the Agency on it (its pin can be moved), and shrinks back into the button when closed.
  * Change: Dr. Dre Contract moved to the HEISTS card.

### v0.19.0 (2026-10-27)
* Vehicle Manager:
  * Add: the details on a car's card are filters: click the manufacturer (e.g. Canis), the class, the vehicle type, the garage, the level or an icon (Imani, Benny's, HSW, Modified, Favorite) to see only the cars with it; click again to take it off.
  * Add: a level filter next to the garage filter (with how many cars are on each level), shown when the chosen garage has levels.
  * Add: the filters in use show as chips above the cards, each with ✕, plus Clear all.
* Everywhere:
  * Change: new versions are looked for every 3 hours (was once a day).

### v0.18.0 (2026-10-27)
* Everywhere:
  * Add: every copy of GTA V Manager (a fork on another GitHub account) updates itself. When a new version is out, its owner (logged in) is asked “Update now?”; on Yes the new files are copied from the original repository into theirs, the ones already the same are skipped, and the page reloads by itself once GitHub has published it. Their data/ and login (auth.json) are never touched.
  * Add: “Not now” keeps it for later: ⋮ → Update to … asks again. Visitors who aren't logged in are not asked.
  * Add: update.json in the original repository lists the files a copy takes, so new files can be added later without changing the copies.

### v0.17.1 (2026-10-27)
* Everywhere:
  * Fix: saving to GitHub no longer warns at the first failure (a phone waking up, Chrome back from the background, a short network drop): it tries again quietly after 5 s, 15 s, then every 30 s, and right away when you come back to the app. The warning shows only if it still fails after 2 minutes, with the reason, and a note confirms when it is saved.
  * Fix: when another device saved the same file in between, the save reads GitHub again (fresh, not a cached copy) and tries up to 3 times.

### v0.17.0 (2026-10-26)
* Everywhere:
  * Add: GTA V Manager can be installed as an app (PWA): its own icon and window on Android, iPhone / iPad, Windows, Mac, Linux and ChromeOS. ⋮ → Install as an app uses the browser's own install when it offers one, otherwise shows the steps for this device (and the others).
  * Add: it opens without internet, with the last saved copy; changes are kept on the device and sent to GitHub as soon as the connection is back (no more failed-save warnings while offline).
  * Change: a new version shows up on a normal reload; Ctrl+F5 is no longer needed.
  * Add: app shortcuts (long press on the icon): Vehicle Manager, Production Manager, Job Manager. The app's title bar takes the theme's colour.

### v0.16.0 (2026-10-26)
* Job Manager:
  * Change: the page is split in two big cards, HEISTS (Cayo Perico, Cluckin' Bell Farm Raid, Diamond Casino, Doomsday, Kortz Center) and JOBS (Agency, Auto Shop, Bail Office, Dr. Dre Contract, Garment Factory, Money Fronts), each with its own emblem.
  * Change: Money Fronts is a card like the others, showing how many fronts you own; it still opens its page.

### v0.15.0 (2026-10-26)
* Production Manager:
  * Add: the Hangar has its own page (from its list and its window): the laptop, the source cooldowns, Rooster and a table of the bonus and the cooldown for each group of cargo.
  * Add: source cooldown reminder for the Hangar: pick the cargo type and how many crates you brought (1 to 4), press the bell, and it rings when that type can be sourced again (2 to 7 minutes, as in the game).
  * Change: the Hangar sale is shown big as the game's laptop shows it, and small under it what you get after Ron's 5%.
  * Change: owning Hands On Car Wash adds 35% to Counterfeit Cash sales and Smoke on the Water 35% to Weed Farm sales (MC sales only, not the Nightclub).
  * Fix: coming back from another page starts with a clean map, without the last window still open.
  * Fix: the Hangar's crates bar no longer sticks to the cargo type list above it.
* Job Manager:
  * Add: the Job Manager page (from its Home card, still marked Coming soon): one card for every job emblem.
  * Add: the Money Fronts page: Hands On Car Wash, Higgins Helitours and Smoke on the Water, each with owned, Heat (laundering missions and legal jobs), the 15 missions that double its safe income, and notifications at 80% and 100% Heat.
* Vehicle Manager:
  * Add: a garage can be a Hangar: 20 places for planes and helicopters, named after your Hangar in Production Manager; a car put in a Hangar, or an aircraft in a garage, gets a warning.
* Everywhere:
  * Change: in the pages menu, the pages of a manager are always shown under it, a little to the right; Hangar and Job Manager / Money Fronts added.

### v0.14.0 (2026-10-26)
* Production Manager:
  * Add: the Hangar: pick it from the game's 5, Air Freight Cargo crates (0 / 50) with a switch between Simple (one type or mixed) and Exact (a counter for each of the 8 types), the same-type bonus by type, Higgins Helitours (+10%), Ron's 5% taken off, Invite only and Public 20+, Rooster with a timer and notifications, hangar almost full / full.
* Vehicle Manager:
  * Add: photo studio: paste a screenshot with Ctrl+V (or the Paste button), crop it with a fixed format (16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 1:1, 21:9 or free), move and resize the frame, zoom with the slider, the mouse wheel or two fingers; Vibrance added to the colour sliders; the last format is remembered.
* Home:
  * Fix: dragging the cards is calm again: a card takes the place it is over and the others slide once, without jumping back and forth.
* Everywhere:
  * Add: when a new version of GTA V Manager is out, a small window says so once (for a copy kept on the computer or a fork too).

### v0.13.0 (2026-10-25)
* Home:
  * Add: drag the cards to put them in your own order (on a phone, hold a card first); the order is remembered and "Default order" brings it back.
  * Change: the cards are more see-through, so the background shows better.
  * Change: after Show all, Show less is always in the top bar of the weekly bonuses window.
* Production Manager:
  * Add: every business is picked from the game's own list (Clubhouse, Weed Farm, Counterfeit Cash, Cocaine Lockup, Document Forgery, Meth Lab, Nightclub, Vehicle Warehouse) and shows its full in-game name.
  * Change: every business shows its sale the same way: Invite only and Public 20+ (+50%) in big, selling nearby (no bonus) small.
  * Add: the Nightclub page opens from the list and from its window; the Bunker page opens from the list too.
  * Fix: clicking another pin while a window is open now opens that business (a long name no longer covers the pin next to it).
* Bunker:
  * Fix: research can be set to 60; letting go there finishes the project (with Undo).
  * Change: "Research projects finished" shows X / 51 (the game's total) and stops there; add "All research is done", which puts the staff on Manufacturing.
  * Change: the sale shows Invite only and Public 20+ directly, without the players slider.
* CEO Warehouses:
  * Add: the special items (Amir Group Investments in the game) are shown and edited from the list too, and their value is shown next to the sale.
  * Change: a delivery vehicle upgrade ticked on one warehouse is ticked on all of them, like in the game.
* Vehicle Manager:
  * Change: a visitor sees one example garage (Auto Shop), marked as a preview, and one button, Create my own collection, which starts an empty collection; the same option is in the ⋮ menu, with a confirmation.
  * Fix: a full garage is no longer a notification under the bell; the same notification is never repeated within 10 minutes.

### v0.12.0 (2026-10-24)
* Production Manager:
  * Add Bunker: pick yours from the game's 11 bunkers, staff on manufacturing, research or both, research progress with an alert when a project is done, Equipment / Staff / Security, bed, Mansion boost.
  * Add the Bunker advanced view (Disruption Logistics bars, staff planner, sale) in the window and as its own page, #bunker, in the Production Manager submenu.
  * Add: pointing at a business in the menu lights up its pin and brings it to the middle of the free map; the map goes back when the menu closes.
  * Fix the CEO Warehouses tile showing the MC Business text.

### v0.11.0 (2026-10-24)
* Add Property, Financial and Job Manager to Home as coming soon.
* Home:
  * Change cards: no title under the emblem, one line of text, see-through.
  * Fix a leftover piece of another emblem under Vehicle Warehouse.
* Weekly bonuses:
  * Change order: 2X first, then 3X.
  * Show all 2X and 3X when the window opens; Show less goes back to that size.
  * Add a bigger button to make the window small.
* Production Manager:
  * Add short lists for every business on phones, with Open all settings.
  * Add a bar of boxes for CEO crates (click or drag).
  * Add Add another warehouse in the CEO window; the new warehouse opens straight away.
  * Change the empty CEO slot in the menu into a small + button.
  * Change map rings: red when empty, orange at half, light green when full.
  * Add a Stock label to the value in the top bar.
  * Add alerts when the Acid Lab daily boost is used up and when it is available again.
  * Change phone menu tiles: smaller, emblem only.
  * Fix windows jumping to the top after ticking a box.
  * Fix the map switching to Satellite while zooming on another style.
  * Fix leftover pieces around the CEO, Hangar, Acid Lab and Vehicle Warehouse emblems.
* Vehicle Manager:
  * Add a photo editor: brightness, contrast, saturation, hue, warmth, rotate, mirror.
  * Change the Garages button icon.
* Add a highlighted Start here button for first-time visitors.
* Change Vehicle Export Tracker: Invite only and Public 20+ shown side by side.
* Change the version history to this format; versions renumbered (1.0 and 1.1 became 0.9 and 0.10).

### v0.10.0 (2026-10-24)
* Production Manager:
  * Add CEO Warehouses: the game's 22 warehouses, crates, sale value, staff timer, special items, delivery vehicle upgrades.
  * Add Acid Lab: production, Mutt's supplies timer, daily boost, upgrades.
  * Add the Mansion production boost (x3 for 24 hours) for MC businesses and Acid Lab.
  * Add typing the Nightclub safe amount.
  * Add a bed mark for the Vehicle Warehouse.
* Add what you earn to Vehicle Export Tracker (Invite only / Public 20+, after the modification cost), also in Production Manager.
* Add garage levels to Vehicle Manager, picked from a list when adding a vehicle.
* Home:
  * Add the background poster.
  * Add this week's GTA Online bonuses, read every Thursday by a GitHub Action.
  * Add the Getting started guide.
* Add a guided tour to every page.
* Fix the Production Manager submenu closing too fast.
* Change: no car emoji next to the Vehicle Manager title.

### v0.9.0 (2026-10-23)
* Change: rewritten as one clean page: one top bar, one theme system, one language switch, one login, one notifications bell, one tour engine for all sections.
* Change login to a real form in the page, so the browser offers to save the password.
* Same data and the same files on GitHub: nothing to move.

### v0.8.0 (2026-10-23)
* Change: one file, GTA_V_Manager.html; index.html only redirects to it.
* Change: everything saved to GitHub lives in data/ (vehicles, garages, production, warehouse); older files moved automatically.
* Add one version history for the whole project.

### v0.7.0 (2026-10-22)
* Add all sections in one page: Vehicle Manager, Production Manager, MC Business, Nightclub, Vehicle Export Tracker.
* Change: Car Manager renamed Vehicle Manager, with vehicle types (car, moto, plane, heli, boat, yacht, other).
* Add exported collections in the tracker (✓ Exported, folded, moved to the end).
* Add sticky top bars and the Production Manager submenu in the pages menu.
* Add new emblems and the gold M icon.

### v0.6.0 (2026-10-21)
* Nightclub:
  * Add popularity, goods value (private / public lobby), safe, floors, technicians and assignments.
  * Add the Advanced view (mixer, Optimize, sale planner) and its own page.
* Add Vehicle Warehouse, linked with the Vehicle Export Tracker, with quick add of export cars.
* Change: exact values and finer bars.

### v0.5.0 (2026-10-21)
* Add login with user and password (the GitHub token encrypted in auth.json); data saved to GitHub.
* Add notifications in every section.

### v0.4.0 (2026-10-19)
* Add themes and English / Romanian everywhere.
* Add map styles: Satellite, Atlas, Road and Dark; pins keep their place on every style.
* Add guided tours.
* Add pin layers (Front / Normal / Back, plus automatic) and a confirmation before moving a pin.
* Fix the map tearing on phones when zooming out (smaller map copy while zoomed out).

### v0.3.0 (2026-10-18)
* Add MC Business complete: supplies, stock, timers, alerts, upgrades.
* Add the Clubhouse: bar resupply and earnings bag, Custom Bike Shop.

### v0.2.0 (2026-10-18)
* Change: Production Manager rebuilt from scratch, with a cascading menu and a real map of Los Santos.

### v0.1.0 (2026-10-17)
* Add Car Manager: cars, garages with slots, filters, photos.
