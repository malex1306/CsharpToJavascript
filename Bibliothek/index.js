import Buch from "./Buch.js";
import Bibliothek from "./Bibliothek.js";

const meineBibliothek = new Bibliothek();

const buch1 = new Buch("Der Hobbit","J.R.R. Tolkin", "12345");
const buch2 = new Buch("1984", "George Orwell", "978-3-518-12345-7");

meineBibliothek.buchHinzufuegen(buch1);
meineBibliothek.buchHinzufuegen(buch2);

meineBibliothek.zeigeAlleBuecher();