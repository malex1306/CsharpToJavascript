const story = {
    start: {
        text: "Willkommen in CelMoria! Deine Reise beginnt hier.",
        choices: {
            "Weiter": "scene1"
        }
    },
    scene1: {
        text: "Du stehst vor einem dunklen Wald. Ein Pfad führt nach links, einer nach rechts.",
        choices: {
            "Links gehen": "leftPath",
            "Rechts gehen": "rightPath"
        }
    }
};
