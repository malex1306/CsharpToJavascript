const readline = require("readline");

async function main() {
    let arrRooms = Array.from({ length: 2 }, () => Array(2).fill(0));
    let arrTemp = Array.from({ length: 2 }, () => Array(2).fill(0));

    await room(arrRooms);
    await temperature(arrRooms, arrTemp);
}

async function room(arrRooms) {
    for (let i = 0; i < arrRooms.length; i++) {
        for (let j = 0; j < arrRooms[i].length; j++) {
            arrRooms[i][j] = await askNumber(`Geben Sie die Raumnummer (1 - 4) ein: `, 1, 4);
        }
    }
    console.log("Raumnummern gespeichert.\n");
}

async function temperature(arrRooms, arrTemp) {
    for (let i = 0; i < arrRooms.length; i++) {
        for (let j = 0; j < arrRooms[i].length; j++) {
            arrTemp[i][j] = await askNumber(`Geben Sie die Temperatur für Raum ${arrRooms[i][j]} ein: `, -50, 50);
        }
    }

    console.log("\nRaumtemperaturen aufgenommen.\n");

    let maxTemp = getMaxTemperature(arrTemp);
    let avgTemp = getAverageTemperature(arrTemp);

    console.log(`Maximale Temperatur: ${maxTemp}°C`);
    console.log(`Durchschnittstemperatur: ${avgTemp.toFixed(2)}°C`);
}

// Funktion zur Ermittlung der maximalen Temperatur
function getMaxTemperature(arrTemp) {
    return Math.max(...arrTemp.flat());
}

// Funktion zur Ermittlung der durchschnittlichen Temperatur
function getAverageTemperature(arrTemp) {
    let sum = arrTemp.flat().reduce((acc, val) => acc + val, 0);
    return sum / (arrTemp.length * arrTemp[0].length);
}

// Funktion für Benutzereingaben mit Validierung
async function askNumber(question, min, max) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (input) => {
            input = input.trim();
            let number = parseInt(input, 10);

            if (!isNaN(number) && number >= min && number <= max) {
                rl.close();
                resolve(number);
            } else {
                console.log(`❌ Ungültige Eingabe! Bitte eine Zahl zwischen ${min} und ${max} eingeben.`);
                rl.close();
                resolve(askNumber(question, min, max)); // Rekursiver Aufruf
            }
        });
    });
}

main();
