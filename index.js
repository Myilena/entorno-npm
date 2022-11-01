const express = require("express");
const colors = require("colors");
const config = require("./app/config");

const server = express();

const port = process.env.port;
//const port = 3000;

server.get("/", (req, res) => {
  res.send("hola mundo");
});

server.listen(port, () => {
  mensaje = `Esta conectado en la url http://localhost:${port}`;
  switch (process.env.ENTORNO) {
    case "qa":
      console.log(mensaje.bgYellow);

      break;
    case "development":
      console.log(mensaje.bgBlue);
      break;
    case "production":
      console.log(mensaje.bgRed);
      break;

    default:
      console.log(mensaje.rainbow);
      break;
  } //Este se encarga de darle el color segun el trabajo que estemos haciendo//
});
