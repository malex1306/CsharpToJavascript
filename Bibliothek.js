import Buch from "./Buch.js";

class Bibliothek {
    constructor() {
        this.buecher = [];
    }

    buchHinzufuegen(buch){
        this.buecher.push(buch);
    }

    zeigeAlleBuecher(){
        this.buecher.forEach((buch)=>
        console.log(`${buch.titel} von ${buch.autor} - ${buch.verfuegbar ? "Verfuegbar" : "Ausgeliehen"}`));
    }
}

export default Bibliothek;