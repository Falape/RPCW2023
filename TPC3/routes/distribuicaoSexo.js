var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:' + process.env.JSON_SERVER_PORT + '/pessoas?sexo=feminino')
    .then(feminino => {
      axios.get('http://localhost:' + process.env.JSON_SERVER_PORT + '/pessoas?sexo=masculino')
        .then(masculino => {
          res.render('distribuicaoSexo', { feminino: feminino.data.length, masculino: masculino.data.length})
        })
        .catch(function (erro) {
          res.render('error', { error: erro });
        })
     //res.render('distribuicaoSexo', { individuos: dados.data })
    })
    .catch(function (erro) {
      res.render('error', { error: erro });
    })
});

module.exports = router;
