let player = {
    class: "",
    strength: 0,
    dexterity: 0,
    intelligence: 0,
    points: 10
};

function chooseClass(selectedClass) {
    player.class = selectedClass;
    alert("Du hast " + selectedClass + " gewähltgit pull origin main\n");
}

function increaseStat(stat) {
    if (player.points > 0) {
        player[stat]++;
        player.points--;
        document.getElementById(stat).innerText = player[stat];
        document.getElementById("points").innerText = player.points;
    }
}
