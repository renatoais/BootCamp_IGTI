import { appendFileSync, promises as fs } from "fs"; ///Modulo nativo do Node de FileSystem promisses
import { inherits } from "util";

asinc();
writeReadJson();

///utilizando async forma mais recomendada
async function asinc() {
  try {
    await fs.writeFile("teste.txt", "bla bla bla");
    await fs.appendFile("teste.txt", "\nteste apend file");
    const data = await fs.readFile("teste.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

///escrevendo json
async function writeReadJson() {
  try {
    const arrayCarro = ["Gol", "Palio", "Uno"];
    const obj = { carros: arrayCarro };
    //Escreve
    await fs.writeFile("teste.json", JSON.stringify(obj));
    //Leitura
    const data = JSON.parse(await fs.readFile("teste.json"));
    data.carros.push("Sandeiro");
    console.log(data);
    ///Alteração
    await fs.writeFile("teste.json", JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

/* promisses hell 
fs.writeFile("teste.txt", "bla bla bla")
  .then(() => {
    fs.appendFile("teste.txt", "\nteste apend file")
      .then(() => {
        fs.readFile("teste.txt", "utf-8")
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
*/
/*
import fs from "fs"; ///Modulo nativo do Node de FileSystem
fs.writeFile("teste.txt", "bla bla bla", function (err) {
  ///Escrita do arquivo callback
  if (err) {
    console.log(err);
  } else {
    console.log("Arquivo escrito com sucesso");
    //apennde conteudo no arquivo
    fs.appendFile("teste.txt", "\n teste append file ", function (err) {
      if (err) {
        console.log(err);
      } else {
        fs.readFile("teste.txt", "utf-8", function (err, data) {
          ///Leitura do arquivo
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});

///modo sincrono evitar usar em api
try {
  fs.writeFileSync("teste1.txt", "bla bla bla");
  const data = fs.readFileSync("teste.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.log(err);
}
*/
