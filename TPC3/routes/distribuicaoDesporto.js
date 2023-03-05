var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
  var dict = {};
  axios.get('http://localhost:' + process.env.JSON_SERVER_PORT + '/pessoas')
    .then(pessoas => {
      pessoas.data.forEach(pessoa => {
        pessoa.desportos.forEach(desporto => {
          if (desporto in dict) {
            dict[desporto] += 1;
          } else {
            dict[desporto] = 1;
          }
        });
      });
      
      xValue=[];
      yValue=[];

      Object.keys(dict).forEach(key => {
        xValue.push(key);
      });

      xValue.forEach(value => { 
        yValue.push(dict[value]);
      })
      res.render('distribuicaoDesporto', { xValue: xValue, yValue: yValue })
    })
    .catch(function (erro) {
      res.render('error', { error: erro });
    })
});

module.exports = router;
