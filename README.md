# Angular Hírportál

## Áttekintés
Ez a projekt egy Angular alapú hírportál, amely a főoldalon fontos híreket jelenít meg, valamint egy keresési funkciót kínál egy külön oldalon a NewsAPI használatával. Az alkalmazás Angular service-eket, HTTP kliens API hívásokat és routingot használ a navigációhoz.

## Funkciók
- **Főoldal**: A legfontosabb hírek megjelenítése.
- **Keresőoldal**: Hírek keresése kulcsszavak alapján.
- **NewsAPI integráció**: Hírek lekérése a NewsAPI segítségével.
- **Routing**: Navigáció a főoldal és a kereső oldal között.

## Előfeltételek
- Node.js
- Angular CLI

## Telepítés
1. **Repo klónozása**:
   ```bash
   git clone
   cd
   ```

2. **Függőségek telepítése**:
   ```bash
   npm install
   ```

## Az alkalmazás futtatása
A fejlesztői szerver indítása:
```bash
ng serve
```
Nyisd meg a `http://localhost:4200/` címet. Az alkalmazás automatikusan újratöltődik, ha megváltoztatod a forrásfájlokat.

## Projekt struktúra
- **src/app**: Tartalmazza a fő alkalmazáskódot.
  - **services/news.service.ts**: A NewsAPI hívások kezeléséért felelős.
  - **components**: Az alkalmazás összes komponensét tartalmazza.
    - **news-list**: A főoldalon a fontos hírek megjelenítésére szolgáló komponens.
    - **news-search**: A keresési funkciót megvalósító komponens.
  - **app-routing.module.ts**: Az alkalmazás útvonalait határozza meg.

## Használat
1. **Főoldal**: Top hírek listája jelenik meg.
2. **Keresőoldal**: Írd be a keresési kifejezést és kattints a keresés gombra az eredmények megjelenítéséhez.
