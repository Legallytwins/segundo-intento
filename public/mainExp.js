 let entrada = prompt ("ingrese su N° de expediente");



let salida = entrada + " N° de expediente " +  "ingresado";
alert (salida);
console.log (salida); 

const express = require('express');
const app = express();
// Contenido estático
app.use(express.static(`public`))
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + '/public/contacto.html');
});
app.get('/tienda', (req, res) => {
  res.sendFile(__dirname + '/public/tienda.html');
});

