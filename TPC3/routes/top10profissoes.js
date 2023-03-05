var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var dict = {};
  axios.get('http://localhost:' + process.env.JSON_SERVER_PORT + '/pessoas')
    .then(pessoas => {
      pessoas.data.forEach(pessoa => {
          if (pessoa.profissao in dict) {
            dict[pessoa.profissao] += 1;
          } else {
            dict[pessoa.profissao] = 1;
          }
      });
      
      const sortedByValueDescending = Object.entries(dict)
          .sort(([, value1], [, value2]) => value2 - value1);
          //.reduce((acc, [key, value]) => ({...acc, [key]: value}), {});
      
      const top10 = sortedByValueDescending.slice(0, 10);
      console.log(top10);
      
      // xValue=[];
      // yValue=[];

      // Object.keys(dict).forEach(key => {
      //   xValue.push(key);
      // });

      // console.log(xValue);
      // xValue.forEach(value => { 
      //   yValue.push(dict[value]);
      // })
      // console.log(yValue);
      res.render('top10Profissoes', { top10Profissoes: top10})
    })
    .catch(function (erro) {
      res.render('error', { error: erro });
    })
});

module.exports = router;
