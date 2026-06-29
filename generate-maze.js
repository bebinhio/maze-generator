const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    // Create 'mazes' directory if it doesn't exist
    const outputDir = path.join(__dirname, 'mazes/kids/easy/horizontal');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await puppeteer.launch({ headless: 'shell' });
    const page = await browser.newPage();

    // Load the local maze HTML file by reading its content
    const htmlContent = fs.readFileSync(path.join(__dirname, 'maze-final.html'), 'utf8');
    await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

    // Hide the toggle button before generating PDFs
    await page.evaluate(() => {
        document.querySelector('#toggleSolution').style.display = 'none';
    });

    // Generate 100 mazes
    const mazeCount = 100;
    for (let i = 1; i <= mazeCount; i++) {
        console.log(`Generating maze ${i}`);

        // Generate the maze without the solution
        await page.evaluate(() => {
            Maze.display("maze_container");
            solutionVisible = false;
        });

        // Save the maze without solution as a PDF in the 'mazes' directory
        await page.pdf({
            path: path.join(outputDir, `maze-kids-easy-horizontal-${i}.pdf`),
            format: 'A4',
            printBackground: true
        });

        console.log(`Maze ${i} saved.`);

        // Show the solution by toggling it
        await page.evaluate(() => {
            let path = Maze.findPath();
            if (path) {
                Maze.display("maze_container", path);
            }
            solutionVisible = true;
        });

        // Save the maze with the solution as a PDF in the 'mazes' directory
        await page.pdf({
            path: path.join(outputDir, `maze-kids-easy-horizontal-${i}-solution.pdf`),
            format: 'A4',
            printBackground: true
        });

        console.log(`Maze ${i} solution saved.`);
    }

    await browser.close();
    console.log('Finished generating mazes and solutions.');
})();
