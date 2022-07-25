require('dotenv').config();
const express = require("express");
const app = express();
const hbs = require ('hbs');

const port = 8085;



/*Handlebars*/

app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials');


/*-----middleware------*/ 
app.use('/assets' , express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use (require('./router/router'));
app.use (require('./router/contacto'));




/*

app.get('/', (req, res) => {
 res.render('index', {
    nombre: 'BTB Nat Clau',
    titulo: 'Legal Smart Solutions'
 }
 )
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
   });

   app.get('/equipo', (req, res) => {
    res.render('equipo');
   });

   app.get('/servicios', (req, res) => {
    res.render('servicios');
   });


   app.get('/miCuenta', (req, res) => {
    res.render('miCuenta');
   });

   app.get('/blog', (req, res) => {
    res.render('blog');
   }); 





/*
app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + 'public/contacto.html');
   });

   app.get("/ubicacion", (req, res) => {
    res.send("Mendoza, Argentina");
   });

   app.get("*", (req, res) => {
    res.send("error 404");
   })

   */

   
app.listen (port, ()=> { 
    console.log(`Usando el puerto http://localhost:${port}`);
})