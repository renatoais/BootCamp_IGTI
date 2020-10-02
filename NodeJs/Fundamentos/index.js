///Node sempre devolve o argv para pasagem de parametro chamando a função node index.js 1000
console.log(process.argv);
const numero = parseInt(process.argv[2]);
const multiplo = [];

for (let i = 3; i < numero; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiplo.push(i);
  }
}

console.log(multiplo);
