let allUsers = [];
let allUsersFilter = [];
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
  filter();
  renderUsers();
}

///Cria Array com dados
async function fetchUser() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();

  allUsers = json.results.map((results) => {
    return {
      img: results.picture.thumbnail,
      name: results.name.first + " " + results.name.last,
      gender: results.gender,
      age: results.dob.age,
    };
  });
}

function render() {
  filter(strSearch);
  renderUsers();
  renderEstat();
}

function filter() {
  allUsersFilter = allUsers.filter(function (users) {
    return users.name.toUpperCase().includes(strField.toUpperCase());
  });
}

function doShort() {
  allUsersFilter.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
}

function renderUsers() {
  let userHTML = "<div>";
  doShort(); /// Ordena o array
  allUsersFilter.forEach((results) => {
    const { img, name, lastname, gender, age } = results;

    const userHTMLstr = `
    <div class='userf1'>
      <div>
        <img src="${img}" alt="${name}">
      </div>
      <div>
        <ul>
          <li>Nome : ${name} ,${age} anos </li>
        </ul>
      </div>
    </div>  
  `;
    userHTML += userHTMLstr;
  });

  userHTML += "</div>";
  tabUsers.innerHTML = userHTML;
}

function renderEstat() {
  let userHTML = "<div>";

  allUsers.forEach((results) => {
    const { img, name, lastname, gender, age } = results;

    const userHTMLstr = `
    <div class='userf1'>
      <div>
        <img src="${img}" alt="${name}">
      </div>
      <div>
        <ul>
          <li>Nome : ${name} ${lastname} ,${age} anos </li>
        </ul>
      </div>
    </div>  
  `;
    userHTML += userHTMLstr;
  });

  userHTML += "</div>";
  tabUsers.innerHTML = userHTML;
}
