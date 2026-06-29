# Find the Path - Maze Generator

An automated generator of unique mazes along with solutions, perfect for bulk creating publication materials like "Activity Books" (e.g., for the Amazon KDP platform).

## 🚀 Features

- Generates a specified number of unique mazes using the **Recursive Division** algorithm.
- Finds the solution using the BFS (**Breadth-First Search**) algorithm.
- Automatically saves mazes and answer files in **PDF (A4)** format using the **Puppeteer** library.
- Allows generating hundreds of ready-to-use pages with a single command.

## 📋 Requirements

- Node.js (v14 or newer)

## 🛠 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd find-the-path
```
2. Install dependencies:
```bash
npm install
```

## 🎮 Running the generator

Run the following command in the terminal to generate mazes in PDF format (generates 100 pieces by default and saves them to the output folder):

```bash
node generate-maze.js
```

The files will be saved inside an automatically created subdirectory `mazes/kids/easy/horizontal`, separating puzzles and solutions.

## 📂 Directory structure
- `maze-final.html` - engine generating the maze and UI interface in HTML, CSS, and JS.
- `generate-maze.js` - Node.js script using Puppeteer for automated generation of single PDFs.
- `merge-pdfs.js` - script based on the `pdf-lib` library used to merge generated files into one collective document for Amazon KDP purposes.
- `opis_techniczny.txt` - detailed technological and functional description.
- `opis_komercyjny.txt` - description of the product's commercial advantages.
