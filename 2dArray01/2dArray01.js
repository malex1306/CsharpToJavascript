const array = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        process.stdout.write((array[i][j] + " "). padStart(5));
    }
    console.log();
}

//process.stdout.write(...) = gibt den String (formatiert) direkt
//in der Konsole aus ohne neue Zeile \n

//+ " " = wandelt das Element in einen string um indem es mit Leerzeichen
// verbunden wird