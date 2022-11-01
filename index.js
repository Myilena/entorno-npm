    const express = require("express");
    const colors = require("colors");
    const config = require("./app/config");

    const server = express();

    const port = process.env.port;
    //const port = 3000;

    server.get("/", (req, res) => {
    res.send("hola mundo");
    });

    server.listen(port,callback);
