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

/*const nazev = "Kniha 1";
const autor = "Michal Kučera";
const cena = 450;
const naSklade = true;

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kučera",
    cena: 450,
    naSklade: true,
}

kniha.autor = "jana";
kniha.jazyk = "cestina";

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>";
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>";

console.log (kniha);




const user1 = {
    fullName: 'Lubomír Větvička',
    login: 'lubos',
    address: {
      streetName: 'Pod Kaštany',
      number: 31,
      city: 'Horní Dlouhonosy',
      postalCode: '123 11',
    },
    cartItems: 0,
  };

  console.log (user1.address.city);
  */

//realitka
/*const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };


  document.body.innerHTML += "<p>Dispozice bytu: " + apartment.disposition + "</p>";  
  document.body.innerHTML += "<p>Čistý nájem bez poplatků: " + apartment.price.rent + "</p>";  
  document.body.innerHTML += "<p>Celý objekt představující výměru bytu: " + apartment.area.floorage + "</p>";
  
  apartment.mesto = "Praha";
  apartment.mestskaCast = "Dejvice";
  document.body.innerHTML += "<p>Město: " + apartment.mesto + " a městská část: " +  apartment.mestskaCast +"</p>";  

  apartment.status = "taken";
  document.body.innerHTML += "<p>Stav: " + apartment.status + "</p>"; 
  */
  
//knihovna
/*const kniha1 = {
    nazev: "Bible",
    autor: "neznámý",
    pocetStran: 890,
    vydavatel: {
        vydavatelstvi: "Host",
        adresa: "Brno",
    },
    ISBN: 9872642682,
};

const kniha2 = {
    nazev: "Bylo nás pět",
    autor: "Karel Poláček",
    pocetStran: 250,
    vydavatel: {
        vydavatelstvi: "Albatros",
        adresa: "Praha",
    },
    ISBN: 987252626,
};
*/


//ockovani2
const person = {
    name: 'Květoslav Voňavý',
    age: 67,
}

person.language = prompt ("jakým jazykem chcete komunikovat?");

document.body.innerHTML += 
