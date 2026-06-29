const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

(async () => {
    // 1. Inicjalizacja nowego, pustego dokumentu PDF
    const mergedPdf = await PDFDocument.create();
    
    // Ścieżka, w której znajdują się nasze wygenerowane pliki
    const inputDir = path.join(__dirname, 'mazes/kids/easy/horizontal');
    const outputPath = path.join(__dirname, 'mazes/kdp-interior-final.pdf');

    const mazeCount = 100;

    console.log('Rozpoczynam scalanie plików PDF...');

    // 2. Najpierw dodajemy wszystkie strony z ZAGADKAMI (od 1 do 100)
    for (let i = 1; i <= mazeCount; i++) {
        const mazeFilePath = path.join(inputDir, `maze-kids-easy-horizontal-${i}.pdf`);
        
        if (fs.existsSync(mazeFilePath)) {
            const pdfBytes = fs.readFileSync(mazeFilePath);
            const pdf = await PDFDocument.load(pdfBytes);
            // Kopiujemy pierwszą (jedyną) stronę z pliku
            const [copiedPage] = await mergedPdf.copyPages(pdf, [0]);
            mergedPdf.addPage(copiedPage);
            console.log(`Dodano labirynt ${i}`);
        } else {
            console.warn(`Brak pliku: ${mazeFilePath}`);
        }
    }

    console.log('Dodano wszystkie zagadki. Rozpoczynam dodawanie rozwiązań...');

    // 3. Na końcu dodajemy strony z ROZWIĄZANIAMI (od 1 do 100)
    for (let i = 1; i <= mazeCount; i++) {
        const solutionFilePath = path.join(inputDir, `maze-kids-easy-horizontal-${i}-solution.pdf`);
        
        if (fs.existsSync(solutionFilePath)) {
            const pdfBytes = fs.readFileSync(solutionFilePath);
            const pdf = await PDFDocument.load(pdfBytes);
            // Kopiujemy pierwszą (jedyną) stronę z rozwiązania
            const [copiedPage] = await mergedPdf.copyPages(pdf, [0]);
            mergedPdf.addPage(copiedPage);
            console.log(`Dodano rozwiązanie ${i}`);
        } else {
            console.warn(`Brak pliku rozwiązania: ${solutionFilePath}`);
        }
    }

    // 4. Zapisanie połączonego pliku na dysku
    const mergedPdfBytes = await mergedPdf.save();
    fs.writeFileSync(outputPath, mergedPdfBytes);

    console.log(`Zakończono! Gotowy manuskrypt zapisano w: ${outputPath}`);
})();
