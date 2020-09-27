let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPorpulationFavorites = 0;

let numberFormat = null;

window.addEventListener("load", () => {
  tabCountries = document.querySelector("#tabCountries");
  tabFavorites = document.querySelector("#tabFavorites");
  countCountries = document.querySelector("#countCountries");
  countFavorites = document.querySelector("#countFavorites");
  totalPopulationList = document.querySelector("#totalPopulationList");
  totalPorpulationFavorites = document.querySelector(
    "totalPopulationFavorites"
  );

  numberFormat = Intl.NumberFormat("pt-BR");

  fetchCountries();
});

function fetchCountries() {
  console.log("fetchCountries");
}

async function fetchCountries() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const json = await res.json();
  allCountries = json.map((country) => {
    return {
      id: country.numericCode,
      name: country.translations.pt,
      formattedPopulation: formatNumber(country.population),
      population: country.population,
      flag: country.flag,
      capital: country.capital,
      continente: country.region,
    };
  });
  render();
}

function render() {
  renderCountrylist();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
}

function renderCountrylist() {
  let countriesHtml = "<div>";
  allCountries.forEach((country) => {
    const {
      name,
      flag,
      id,
      population,
      formattedPopulation,
      capital,
      continente,
    } = country;

    ///insere html via JS
    const countryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn">+</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}">
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
            <li>Capital : "${capital}"</li>
            <li>Continente : "${continente}"</li>
          </ul>
        </div>
      </div>  
    `;

    countriesHtml += countryHTML;
  });

  countriesHtml += "</div>";
  tabCountries.innerHTML = countriesHtml;
}

function renderFavorites() {
  let favoritesHTML = "<div>";

  favoriteCountries.forEach((country) => {
    const {
      name,
      flag,
      id,
      population,
      formattedPopulation,
      capital,
      continente,
    } = country;

    const favoriteCountryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn red darken-4">-</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}">
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
            <li>Capital : "${capital}"</li>
            <li>Continente : "${continente}"</li>
          </ul>
        </div>
      </div>  
    `;
    favoritesHTML += favoriteCountryHTML;
  });

  favoritesHTML += "</div>";
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  totalPopulationList.textContent = totalPopulation;
  totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}

function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll(".btn"));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll(".btn"));

  countryButtons.forEach((button) => {
    button.addEventListener("click", () => addToFavorites(button.id));
  });

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => removeFromFavorites(button.id));
  });
}

function addToFavorites(id) {
  const countryToAdd = allCountries.find((country) => country.id === id);

  favoriteCountries = [...favoriteCountries, countryToAdd];

  favoriteCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  allCountries = allCountries.filter((country) => country.id !== id);

  render();
}

function removeFromFavorites(id) {
  const countryToRemove = favoriteCountries.find(
    (country) => country.id === id
  );

  allCountries = [...allCountries, countryToRemove];

  allCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  favoriteCountries = favoriteCountries.filter((country) => country.id !== id);

  render();
}

function formatNumber(number) {
  return numberFormat.format(number);
}
