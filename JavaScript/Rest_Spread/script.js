window.addEventListener("load", () => {
  doSpread();
  doRest();
  doDestructuring();
});

function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === "Mr"
  );

  const marriedWomen = people.results.filter(
    (person) => person.name.title === "Ms"
  );

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: "Oi" }]; ///(...)Spred Faz a junção de arrays nesse caso juntando os 3 arrays

  console.log(marriedPeople);
}

function doRest() {
  ///ele agrupa
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000));
  console.log(infiniteSum(1, 2, 1000, 1, 2, 3, 4, 34, 34, 34, 34, 2, 23));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
  const first = people.results[0];

  // Repetitivo
  // const username = first.login.username;
  // const password = first.login.password;

  // Usando destructuring
  const { username, password } = first.login; ///remove um objeto de dentro do array

  console.log(username);
  console.log(password);
}
