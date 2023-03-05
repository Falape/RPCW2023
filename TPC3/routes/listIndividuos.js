const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:' + process.env.JSON_SERVER_PORT + '/pessoas')
    .then(dados => {
      res.render('listIndividuos', { individuos: dados.data })
    })
  //res.send('respond with a resource');
});

module.exports = router;
