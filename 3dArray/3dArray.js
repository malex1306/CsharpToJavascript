const readline = require("readline");

async function main() {
    let arrShelves = Array.from({ length: 3 }, () => Array(3).fill(0));
    let arrProducts = Array.from({ length: 3 }, () => Array(3).fill(0));

    await shelves(arrShelves);
    await products(arrShelves, arrProducts);
}

async function shelves(arrShelves) {
    for (let i = 0; i < arrShelves.length; i++) {
        for (let j = 0; j < arrShelves[i].length; j++) {
            arrShelves[i][j] = await askNumber(`Geben Sie eine Regalnummer (1 - 9) ein: `, 1, 9);
        }
    }
    console.log("Regalnummer gespeichert.\n");
}

async function products(arrShelves, arrProducts) {
    for (let i = 0; i < arrShelves.length; i++) {
        for (let j = 0; j < arrShelves[i].length; j++) {
            arrProducts[i][j] = await askNumber(`Geben Sie die Anzahl der Produkte für Regal ${arrShelves[i][j]} ein: `, 0, 100);
        }
    }
    console.log("\nAnzahl aufgenommen.\n");

    let maxProducts = getMaxProducts(arrProducts);
    let avgProducts = getAverageProducts(arrProducts);

    console.log(`Maximale Produkte: ${maxProducts}`);
    console.log(`Durchschnittliche Anzahl der Produkte: ${avgProducts.toFixed(3)}`);
}

function getMaxProducts(arrProducts) {
    return Math.max(...arrProducts.flat());
}

function getAverageProducts(arrProducts) {
    let sum = arrProducts.flat().reduce((acc, val) => acc + val, 0);
    return sum / (arrProducts.length * arrProducts[0].length);
}

async function askNumber(question, min, max) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        function ask() {
            rl.question(question, (input) => {
                input = input.trim();
                let number = parseInt(input, 10);

                if (!isNaN(number) && number >= min && number <= max) {
                    rl.close();
                    resolve(number);
                } else {
                    console.log(`Bitte eine gültige Zahl zwischen ${min} und ${max} eingeben.`);
                    ask(); // 🔄 Wiederhole die Frage, anstatt `askNumber()` erneut aufzurufen
                }
            });
        }
        ask();
    });
}

main();
