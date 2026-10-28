# GTA V Manager

A personal manager for **GTA Online**: your vehicles, businesses, heists and jobs in one page.
It runs in the browser, works on phone and PC, and can be installed as an app.

**Open it:** https://yogi4x4.github.io/GTAManager/GTA_V_Manager.html

Available in **English** and **Romanian** (EN / RO button at the top).

---

## What it does

**Vehicle Manager**
- Your whole collection as cards: photo, brand, model, class, garage and level, Imani / HSW / Benny's.
- Garages with places and levels (and Hangars for aircraft), free / taken places counted for you.
- Click any detail on a card (brand, garage, level, icon) to see only those vehicles.
- Built-in photo studio: paste, crop, zoom and turn pictures.

**Production Manager**
- A map of Los Santos with all your businesses: MC Businesses, Acid Lab, Bunker, Nightclub, Hangar,
  CEO warehouses, Vehicle Warehouse.
- Supplies, stock and sale values that run on their own while you play (the “In game” switch),
  with a bell when something is full or ready.
- Pages for the Nightclub, the Bunker and the Hangar (with the source cooldown reminder).

**Job Manager**
- Heists and jobs as cards.
- **Agency:** the office safe, Security Contracts with the 5-minute cooldown bell, and the
  **Dr. Dre Contract** with all 13 missions, tips for the fastest way, weekly bonus and replay timer.
- **Money Fronts:** Hands On Car Wash, Higgins Helitours, Smoke on the Water (Heat, laundering missions,
  and their bonuses added to your other businesses).
- Its own map of your places.

**Also**
- **Home** with this week's GTA Online bonuses (updated every Thursday).
- **Vehicle Export Tracker.**
- Light / dark themes and your own colours.
- Notifications, guided tours and a “?” help on every page.

## Your data

- Without logging in, everything stays in your browser.
- Logged in, it is saved to **your own GitHub repository** (the `data/` folder) and shows up the same
  on every device. The GitHub token is stored **encrypted** with your password in `auth.json`.
- Nothing is sent anywhere else.

## Install it as an app

Open the page, then **⋮ → Install as an app**. It shows the steps for your device
(Android, iPhone / iPad, Windows, Mac, Linux, ChromeOS). The app opens from its own icon and works without internet too.

## Make your own copy

Anyone can have their own GTA V Manager, with their own data and login:

1. **Fork** this repository (button at the top right).
2. In your copy, **delete** `auth.json` and the files in `data/` except `data/weekly.json`
   (they are the original owner's).
3. **Settings → Pages:** Deploy from a branch, `main`, `/ (root)`, Save.
   Your page: `https://YOUR-NAME.github.io/GTAManager/GTA_V_Manager.html`
4. Make a **fine-grained token** (GitHub → Settings → Developer settings → Personal access tokens):
   only your `GTAManager` repository, **Contents: Read and write**.
5. On your page: **⋮ → Log in → First time: set up the login**. Choose a user and a password and paste the token.
6. **Actions** tab: enable the workflows, then run **Weekly bonuses** once.

**Updates are automatic:** when a new version comes out, your page asks
“Update now?” and copies the new files into your repository by itself.
Your data and login are never touched. Don't use “Sync fork”: it could wipe your data.

## Changes

See [CHANGELOG.md](CHANGELOG.md).

## License and credits

Code under the **GPL v3** license (see [LICENSE](LICENSE)).

This is a fan-made tool, not affiliated with or endorsed by Rockstar Games or Take-Two Interactive.
*Grand Theft Auto*, GTA Online, the map, names and logos belong to their owners.
Game data (prices, payouts, timers) comes from community sources and may change with game updates.

---

### Pe scurt, în română

**GTA V Manager** te ajută să-ți ții evidența în GTA Online: vehiculele și garajele, afacerile pe hartă
(producție, stoc, vânzări), jafurile și misiunile (Agency, Dr. Dre, Money Fronts) și bonusurile săptămânii.
Merge în browser, pe telefon și pe PC, și se poate instala ca aplicație (⋮ → Instalează ca aplicație).
Pagina se trece pe română din butonul **EN / RO**. Pentru o copie proprie, urmează pașii din „Make your own copy”.
