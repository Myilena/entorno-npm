const express = require('express');
const  colors = require('colors'); // 9.7k (gzipped: 4.2k)
const dotenv = require('dotenv').config(); // 2.9k (gzipped: 1.4k)

const server = express();

const port = process.env.PORT;

server.get('/', (req, res)=>{
    res.send('hola mundo');
})

server.listen(port, ()=>{
    console.log(`Esta conectado en la url http://localhost:${port}`.bgred)
})