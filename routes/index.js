var express = require('express');
var router = express.Router();
const petsController = require('../controller/petsController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/pets', function(req, res, next) {
//   res.render('index', { title: 'pets' });
// });

// FORMA ERRADA
// router.get('/servico', function(req, res, next) {
//   res.send(modeloServico);
// });
// module.exports = router;
router.get('/servico', petsController.listaServico) ;

router.get('/pets', petsController.listaPets) ;

module.exports = router;