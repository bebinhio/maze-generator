# Find the Path - Maze Generator

Automatyczny generator unikalnych labiryntów wraz z rozwiązaniami, idealny do masowego tworzenia materiałów do publikacji takich jak "Activity Books" (np. na platformę Amazon KDP).

## 🚀 Możliwości

- Generuje określoną liczbę unikalnych labiryntów za pomocą algorytmu **Recursive Division**.
- Znajduje rozwiązanie algorytmem BFS (**Breadth-First Search**).
- Automatycznie zapisuje labirynty oraz pliki odpowiedzi w formacie **PDF (A4)** z użyciem biblioteki **Puppeteer**.
- Pozwala na wygenerowanie setek gotowych stron jednym poleceniem.

## 📋 Wymagania

- Node.js (v14 lub nowszy)

## 🛠 Instalacja

1. Sklonuj repozytorium:
```bash
git clone <adres-repozytorium>
cd find-the-path
```
2. Zainstaluj zależności:
```bash
npm install
```

## 🎮 Uruchomienie generatora

Uruchom poniższe polecenie w terminalu, aby wygenerować labirynty w formacie PDF (domyślnie generuje 100 sztuk i zapisuje do folderu wyjściowego):

```bash
node generate-maze.js
```

Pliki zostaną zapisane wewnątrz automatycznie utworzonego podkatalogu `mazes/kids/easy/horizontal`, oddzielnie zagadki i rozwiązania.

## 📂 Struktura katalogów
- `maze-final.html` - silnik generujący labirynt i interfejs UI w HTML, CSS i JS.
- `generate-maze.js` - skrypt Node.js wykorzystujący Puppeteer do zautomatyzowanego generowania pojedynczych PDF-ów.
- `merge-pdfs.js` - skrypt oparty na bibliotece `pdf-lib` służący do łączenia wygenerowanych plików w jeden zbiorczy dokument na potrzeby Amazon KDP.
- `opis_techniczny.txt` - szczegółowy opis technologiczny i funkcjonalny.
- `opis_komercyjny.txt` - opis zalet komercyjnych produktu.
