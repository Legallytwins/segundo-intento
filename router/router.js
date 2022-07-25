const { Router } = require("express");
const router = new Router ();


router.get('/', (req, res) => {
    res.render('index', {
       nombre: 'BTB Nat Clau',
       titulo: 'Legal Smart Solutions'
    }
    )
   });
   
   
      router.get('/equipo', (req, res) => {
       res.render('equipo');
      });
   
      router.get('/servicios', (req, res) => {
       res.render('servicios');
      });
   
   
      router.get('/miCuenta', (req, res) => {
       res.render('miCuenta');
      });
   
      router.get('/blog', (req, res) => {
       res.render('blog');
      }); 
   
      module.exports = router;