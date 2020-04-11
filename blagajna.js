function artikal(sifra, cijena, popust) {
  return {
    sifra: sifra,
    cijena: cijena,
    popust: popust
  };
}
function apoeni(vrijednost, broj) {
  return {
    vrijednost: vrijednost,
    kolicina: broj
  };
}
var kuna = apoeni(1, 50);
var dvije = apoeni(2, 50);
var pet = apoeni(5, 50);
var sto = apoeni(100, 20);
var blagajna = {
  kune: kuna.kolicina,
  dvice: dvije.kolicina,
  petice: pet.kolicina,
  stotice: sto.kolicina
};
blagajna.stanje =
  blagajna.kune +
  blagajna.dvice * 2 +
  blagajna.petice * 5 +
  blagajna.stotice * 100;
var cokolada = artikal("cokolada", 8, 5);
var margarin = artikal("margarin", 30, 7);

function racunaj(lista) {
  let cijena = 0;
  for (var i = 0; i < lista.length; i++) {
    cijena += lista[i].cijena;
  }
  if (cijena > 1000) {
    for (i = 0; i < lista.length; i++) {
      if (lista[i].popust === 7) {
        cijena -= lista[i].cijena;
        cijena += lista[i].cijena * (1 - lista[i].popust / 100);
      }
    }
  }
  return cijena;
}
console.log("cijena iznosi " + racunaj([cokolada, margarin]) + "kn");
function suma_apoena(apoeni) {
  var suma = 0;
  for (var i = 0; i < apoeni.length; i++) {
    suma += apoeni[i];
  }
  return suma;
}
function odluka(apoeni, lista) {
  sredi_blagajnu(apoeni);
  let poruka = " placeno";
  let razlika = 0;
  if (suma_apoena(apoeni) > racunaj(lista)) {
    razlika = (suma_apoena(apoeni) - racunaj(lista)).toFixed(2);
    poruka = "platili ste viska " + razlika + "kn";
    return poruka;
  } else if (suma_apoena(apoeni) < racunaj(lista)) {
    let a = suma_apoena(apoeni);
    razlika = (racunaj(lista) - suma_apoena(apoeni)).toFixed(2);
    poruka = "duzni ste jos " + razlika + "kn:";
    poruka += " mozete izbaciti sljedece artikle kako bi iznos bio dovoljan: ";
    while (a < racunaj(lista)) {
      poruka += " " + lista[najskuplji(lista)].sifra + " ";
      lista.splice(najskuplji(lista), 1);
    }
  }

  return poruka;
}

console.log(
  "cijena iznosi " +
    racunaj([margarin, cokolada, cokolada]) +
    " " +
    odluka([5, 2, 5, 5], [margarin, cokolada, cokolada])
);
function najskuplji(lista) {
  var najveci = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].cijena > lista[najveci].cijena) {
      najveci = i;
    }
  }
  return najveci;
}
function sredi_blagajnu(apoeni) {
  for (var i = 0; i < apoeni.length; i++) {
    switch (apoeni[i]) {
      case 1:
        kuna.kolicina++;
        blagajna.kune++;
        break;
      case 2:
        dvije.kolicina++;
        blagajna.dvice++;
        break;
      case 100:
        sto.kolicina++;
        blagajna.stotice++;
        break;
      default:
        pet.kolicina += 1;
        blagajna.petice++;
    }
  }
}
console.log(blagajna);
