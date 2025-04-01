function showCharacterCreation() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("character-creation").style.display = "block";
}

function showSettings() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("settings-screen").style.display = "block";
}

function backToStart() {
    document.getElementById("settings-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}

function exitGame() {
    alert("Danke fürs Spielen!");
    window.close();
}

function startGame() {
    if (player.class === "") {
        alert("Bitte wähle zuerst eine Klasse!");
        return;
    }

    document.getElementById("character-creation").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    document.getElementById("story").innerText =
        `Du bist ein ${player.class}. Deine Reise beginnt! 
         Stärke: ${player.strength}, Geschick: ${player.dexterity}, Intelligenz: ${player.intelligence}`;
    document.getElementById("choices").innerHTML =
        `<button onclick="renderScene()">Weiter</button>`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-screen").style.display = "block";
});
