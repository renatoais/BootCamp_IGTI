console.log("Olá,Mundo !");
var title = document.querySelector("h1");
title.textContent = "Thanos Infinity War";

/////Testando IF
var a = 7;
var b = 7;

if (a > b) {
  console.log(a + "é maior que" + b);
} else {
  if (a < b) {
    console.log(a + "é menor que " + b);
  } else {
    console.log("a e b são iguais.");
  }
}

////Testando Switch
// prettier-ignore
var r = "";
var dia = 2;
switch (dia) {
  case 1:
    r = "Domingo";
    break;
  case 2:
    r = "Segunda ";
    break;
  case 3:
    r = "Terça";
    break;
  case 4:
    r = "Quarta";
    break;
  case 5:
    r = "Quinta";
    break;
  case 6:
    r = "Sexta";
    break;
  case 7:
    r = "Sábado";
    break;

  default:
    r = "Dia invalido";
}
console.log(r);

/////Operador Ternario
var c = 7;
var d = 7;
var resposta = c > d ? "maior" : c < d ? "menor" : "igual";
console.log(resposta);

////Testando While
////Somatorio de numero
var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log("A soma é " + somatorio);

////Testando Do While
somatorio = 0;
numeroAtual = 1;
do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log("A soma é " + somatorio);

//testando o for
//for(inicializa variavel de controle , preposição logica , incremento)
somatorio = 0;
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}
console.log("A soma é " + somatorio);
