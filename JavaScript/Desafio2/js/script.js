let allUsers = [];
let strSearch = null;
let stylebtn = null;
let strField = null;

strSearch = document.querySelector("#name");
stylebtn = document.querySelector("#btn"); //style do botão
let form = document.querySelector("form");

strSearch.addEventListener("keyup", enablebtn);
form.addEventListener("submit", prvSubmit);

window.addEventListener("load", () => {
  fetchUser();
});

///Habilita e desabilita botão
function enablebtn(event) {
  let strtxt = event.target.value;
  if (strtxt.length > 0) {
    stylebtn.removeAttribute("disabled");
  } else {
    stylebtn.setAttribute("disabled", "disabled");
  }
  strField = event.target.value; ///variavel global
}

function prvSubmit(event) {
  event.preventDefault();
  fsearch();
}

function fsearch() {}

///Cria Array com dados
async function fetchUser() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();

  allUsers = json.results.map((results) => {
    return {
      name: results.name.first,
      lastname: results.name.last,
      gender: results.gender,
      age: results.dob.age,
    };
  });
}
