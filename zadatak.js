function poredaj(s) {
  var a = s.split("");
  //koristimo se nizom a jer je lakse baratati
  //tj mijenjati elemente niza,nego sa stringom
  var k; //pomocna varijabla koja sluzi za zamjenu slova
  var poredano = "";
  for (var i = 0; i < a.length - 1; i++) {
    for (var j = i; j < a.length; j++) {
      if (a[i] > a[j]) {
        k = a[i];
        a[i] = a[j];
        a[j] = k;
      }
    }
  }
  for (i = 0; i < a.length; i++) {
    //zapravo niz slova a samo pretvaramo u rijec
    poredano = poredano + a[i];
  }
  return poredano;
}
console.log(poredaj("webmaster"));
