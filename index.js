const array2D = [
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7]
];

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        process.stdout.write((array2D[i][j] + " ").padStart(5));
    }
    console.log();
}
