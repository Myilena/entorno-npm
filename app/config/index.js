const path = require("path"); // busca el archivo .env, config tiene unos parametros obsionales
let ruta = `enviroments/${process.env.ENTORNO}.env`;
console.log(process.env.ENTORNO);
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, ruta),
});
