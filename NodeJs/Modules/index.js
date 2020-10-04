//commom module
//const operacoes = require("./operacoes.js").default; ///importa modulos
//const multiplicacao = require("./operacoes2.js").default;
//const multi = require("./operacoes2.js").default; ///importa modulos

///versão ES6
import multiplicacao from "./operacoes2.js";
import operacoes from "./operacoes.js";
import { soma, subtracao } from "./operacoes3.js"; ///Quando exporta direto na Função Exportação Nomeada

console.log(operacoes.soma(5, 10));
console.log(operacoes.subtracao(5, 3));
console.log(multiplicacao(10, 5));
