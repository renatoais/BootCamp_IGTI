window.addEventListener("load", start);

var globalNames = ["um", "dois", "tres", "quatro"];
var inputName = null;

function start() {
  inputName = document.querySelector("#input1");
  preventFormSubmit();
  activateInput();
  render();
}
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

function insertName(newName) {
  globalNames.push(newName);
  render();
}

function activateInput() {
  function handleTyping(event) {
    if (event.key === "Enter") insertName(event.target.value);
  }
  inputName.focus();
  inputName.addEventListener("keyup", handleTyping);
}

function render() {
  var divNames = document.querySelector("#names");
  divNames.innerHTML = "";

  //cria ul
  //fazer n li's conforme tamanho de global names
  var ul = document.createElement("ul");

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var li = document.createElement("li");

    li.textContent = currentName;
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearinput();
}

function clearinput() {
  inputName.value = "";
  inputName.focus();
}
