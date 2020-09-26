window.addEventListener("load", () => {
  ///arrow function
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doMap() {
  ///retorna um novo array com os campos ajustados.
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}

function doFilter() {
  ///checa a proposição logica
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    ///add um novo atributo ao array
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  ////retorna apenas um valor  nesse caso a soma das idades
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  // let sumAges = 0;

  // for (let i = 0; i < people.results.length; i++) {
  //   var current = people.results[i];
  //   sumAges += current.dob.age;
  // }

  // console.log(sumAges);
}

function doFind() {
  ///Localizar um componente no Vetor. e retorna o objeto
  const found = people.results.find((person) => {
    return person.location.state === "Minas Gerais";
  });

  console.log(found);
}

function doSome() {
  //retorna true ou false se achou
  const found = people.results.some((person) => {
    return person.location.state === "Amazonas";
  });

  console.log(found);
}

function doEvery() {
  ///retorna true se todos atendende determinada regra caso não False
  const every = people.results.every((person) => {
    return person.nat === "BR";
  });

  console.log(every);
}

function doSort() {
  ///ordena
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith("A"))
    .sort((a, b) => {
      return b.name.length - a.name.length;
      // return a.name.localeCompare(b.name);
    });

  console.log(mappedNames);
}
