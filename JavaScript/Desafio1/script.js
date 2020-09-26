window.addEventListener("load", start);

var InputRed = document.querySelector("#red");
var Inputgreen = document.querySelector("#green");
var Inputblue = document.querySelector("#blue");
var txtred = document.querySelector("#txtred");
var txtgreen = document.querySelector("#txtgreen");
var txtblue = document.querySelector("#txtblue");
var objcolor = document.querySelector(".obj"); //Classe Css que será alterada.

var form = document.querySelector("form");
form.addEventListener("submit", preventSubmit);

InputRed.addEventListener("input", countR);
Inputgreen.addEventListener("input", countR);
Inputblue.addEventListener("input", countR);

function start() {
  console.log("pagina carregada");
  initFields();
}

function preventSubmit(event) {
  ///Função para não ocorrer submit do formulario .
  event.preventDefault();
}

function countR(event) {
  txtred.value = InputRed.value;
  txtgreen.value = Inputgreen.value;
  txtblue.value = Inputblue.value;
  objcolor.style.background =
    "rgb(" + txtred.value + "," + txtgreen.value + "," + txtblue.value + ")";
}

function initFields() {
  InputRed.value = 0;
  Inputgreen.value = 0;
  Inputblue.value = 0;
  txtred.value = 0;
  txtgreen.value = 0;
  txtblue.value = 0;
}
