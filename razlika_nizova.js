function samoUPrvom(niz1, niz2) {
  let pomocni = [];
  for (var i = 0; i < niz1.length; i++) {
    if (niz2.indexOf(niz1[i]) === -1) {
      pomocni.push(niz1[i]);
    }
  }
  return pomocni;
}

function razlikaNizova(niz1, niz2) {
  return samoUPrvom(niz1, niz2).concat(samoUPrvom(niz2, niz1));
}

console.log(razlikaNizova([0, 1, 2, 3, 5], [1, 2, 33, 4, 5]));
