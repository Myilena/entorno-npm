    const path = require("path"); // busca el archivo .env, config tiene unos parametros obsionales
    let ruta = `enviroments/${process.env.ENTORNO}.env`;
    console.log(process.env.ENTORNO);
    const dotenv = require("dotenv").config({
    path: path.resolve(__dirname, ruta),
    });

    module.exports = callback= ()=>{
        mensaje = `Esta conectado en la url http://localhost:${process.env.port}`;
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
    }