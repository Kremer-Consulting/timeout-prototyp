# Time Out Annweiler – Prototyp des Redesigns

**Entwurf – nicht die offizielle Website von TIMEOUT Annweiler.**

Klickbarer Prototyp für das neue Erscheinungsbild der Website des Kosmetikstudios Time Out in Annweiler am Trifels.
Die offizielle Website wird weiterhin auf Wix betrieben; dieser Prototyp dient nur zur Abstimmung. Texte, Preise und
Bilder sind vorläufig.

- Ansicht nach Aktivierung von GitHub Pages: `https://kremer-consulting.github.io/timeout-prototyp/`
- Lokal: [`index.html`](index.html) im Browser öffnen

## Inhalt

| Seite | Datei | Stand |
|---|---|---|
| Startseite | [`index.html`](index.html) | ausgearbeitet |
| Leistungen | [`leistungen.html`](leistungen.html) | ausgearbeitet |
| Kontakt | [`kontakt.html`](kontakt.html) | ausgearbeitet |
| Galerie | [`galerie.html`](galerie.html) | ausgearbeitet |
| Angebote des Monats | [`angebote-des-monats.html`](angebote-des-monats.html) | Hinweis, Angebot folgt |
| Schulungen, Services | [`schulungen.html`](schulungen.html), [`services.html`](services.html) | folgt |
| Impressum, Datenschutz | [`impressum.html`](impressum.html), [`datenschutz.html`](datenschutz.html) | folgt |

## Technik

- Reines HTML und CSS, ein kleines Skript für das mobile Menü ([`menu.js`](menu.js)); nur relative Pfade.
- Keine Cookies, keine Formulare, keine Inhalte von fremden Servern (Schriften liegen in [`fonts/`](fonts/)).
- `noindex, nofollow` auf jeder Seite und [`robots.txt`](robots.txt): Suchmaschinen sollen den Prototyp nicht
  aufnehmen.

## Rechte

- **Schriften:** Cormorant Garamond, Montserrat und Alex Brush unter der SIL Open Font License 1.1
  ([`fonts/OFL-cormorant-garamond.txt`](fonts/OFL-cormorant-garamond.txt),
  [`fonts/OFL-montserrat.txt`](fonts/OFL-montserrat.txt), [`fonts/OFL-alex-brush.txt`](fonts/OFL-alex-brush.txt)),
  Dateien aus dem Paket @fontsource 5.3.0.
- **Fotos, Logo und Texte:** alle Rechte vorbehalten. Keine Weiterverwendung ohne Zustimmung des Studios.
  Die Fotos sind eigene Aufnahmen des Studios; Flächen mit „Bild folgt“ sind Platzhalter.

## Aktualisieren

Dieses Repo wird nicht direkt bearbeitet. Quelle ist der Ordner `prototype/` im internen Projekt-Repo; das Skript
`scripts/prototype/publish.sh <lokaler-klon>` kopiert ihn hierher. Danach prüfen, committen und pushen.
