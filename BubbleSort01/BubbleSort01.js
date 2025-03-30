function main() {
    let zahlen = randomZahlen(10);
    console.log("Unsortiert: " + zahlen.join(", "));

    bubbleSort(zahlen);
    console.log("Sortiert:   " + zahlen.join(", "));
}

// Funktion zum Generieren von Zufallszahlen
function randomZahlen(length) {
    let zahlen = [];
    for (let i = 0; i < length; i++) {
        zahlen.push(Math.floor(Math.random() * 10) + 1);
    }
    return zahlen;
}

// Bubble Sort Funktion
function bubbleSort(array) {
    let n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Tauschen der Werte
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    } while (swapped);
}

main();
