//ockovani
/*const jmeno = prompt ("Zadejte své jméno a příjmení");
const vek = Number (prompt ("Zadejte svůj věk"));

document.body.innerHTML = "<p>" + jmeno + ", věk: " + vek + "</p>";

//vyplata
const hodinovka = Number (prompt ("Zadejte svou hodinovou mzdu v Kč"));
const hodiny = 8;
const dny = 21;
const mzda = Number (hodinovka * hodiny * dny);

document.body.innerHTML = "<p>Vaše měsíční hrubá hodinová mzda je " + mzda + " Kč.</p>";


//vyplata 2
const hodinovka = Number (prompt ("Zadejte svou hodinovou mzdu v Kč"));
const hodiny = Number (prompt ("Kolik hodin denně pracujete? Zadejte číslem"));
const dny = Number (prompt ("Zadejte počet odpracovaných dnů v měsíci"));
const mzda = Number (hodinovka * hodiny * dny);

document.body.innerHTML = "<p>Vaše měsíční hrubá hodinová mzda je " + mzda + " Kč.</p>";
*/

const nazev = "Kniha 1";
const autor = "Michal Kučera";
const cena = 450;
const naSklade = true;

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kučera",
    cena: 450,
    naSklade: true,
}

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>";
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>";