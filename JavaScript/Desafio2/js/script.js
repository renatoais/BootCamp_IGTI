let allUsers = [];
let allUsersFilter = [];
let strSearch = null;
let stylebtn = null;
let strField = null;

strSearch = document.querySelector("#name");
stylebtn = document.querySelector("#btn"); //style do botão
strUsersfound = document.querySelector("#userfound");
strEstatfound = document.querySelector("#estatistica");

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

  if (event.key === "Enter") prvSubmit(event);
}

function prvSubmit(event) {
  event.preventDefault();
  filter();
  renderUsers();
  renderEstat();
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

  strUsersfound;
}

function renderEstat() {
  let statHTML = "<div>";

  if (allUsersFilter.length > 0) {
    strUsersfound.textContent =
      allUsersFilter.length + " Usuário(s) Encontrado(s)";
    strEstatfound.textContent = "Estatísticas";
  } else {
    strUsersfound.textContent = "Nenhum Usuário Filtrado";
    strEstatfound.textContent = "Nada a ser exibido";
  }

  countedgenderF = allUsersFilter.filter(
    (gender) => gender.gender.toUpperCase() === "FEMALE"
  );

  countedgenderM = allUsersFilter.filter(
    (gender) => gender.gender.toUpperCase() === "MALE"
  );

  const sumAge = allUsersFilter.reduce((acc, cur) => {
    return (acc += cur.age);
  }, 0);

  const avgAge = sumAge / (countedgenderF.length + countedgenderM.length);

  const statHTMLstr = `
  <div class='userg'>
  <div>
    <div>
      <ul>
        <li>Sexo Masculino : ${countedgenderM.length}</li>
        <li>Sexo Feminino : ${countedgenderF.length} </li>
        <li>Soma das idades : ${sumAge} </li>
        <li>Média das idades : ${avgAge.toFixed(2)} </li>
      </ul>
      </div>
      </div>
  </div>  
`;
  statHTML += statHTMLstr;

  statHTML += "</div>";

  if (allUsersFilter.length > 0) {
    tabEstat.innerHTML = statHTML;
  } else {
    statHTML = "<div></div>";
    tabEstat.innerHTML = statHTML;
  }
}
