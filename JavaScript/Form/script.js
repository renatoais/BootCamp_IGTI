window.addEventListener("load", start);

function start() {
  console.log("aula de eventos");
  console.log("pagina carregada");
}

var nameInput = document.querySelector("#nameInput");
nameInput.addEventListener("keyup", countName); ////adiciona um evento e uma função

var form = document.querySelector("form");
form.addEventListener("submit", preventSubmit);

function countName(event) {
  var count = event.target.value;
  var span = document.querySelector("#nameLen");
  span.textContent = count.length;
}

function preventSubmit(event) {
  ///Função para não ocorrer submit do formulario .
  event.preventDefault();
  alert("Cadastrado com sucesso");
}
