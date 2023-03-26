var express = require('express');
var router = express.Router();
var Person = require('../controllers/person')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Person.list()
    .then(alunos => {
      res.render('index', { slist: alunos, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de alunos"})
    })
});

/* GET Student Form. */
router.get('/alunos/registo', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  res.render('addAlunoForm', {d: data})
});

/* GET Student page. */
router.get('/alunos/:idAluno', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Person.getAluno(req.params.idAluno)
    .then(aluno => {
      res.render('aluno', { a: aluno, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
    })
});

/* GET Student Update Form. */
router.get('/alunos/edit/:idAluno', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Person.getAluno(req.params.idAluno)
    .then(aluno => {
      res.render('updateAlunoForm', {a: aluno, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
    })
});

/* GET Student Delete Form. */
router.get('/alunos/delete/:idAluno', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Person.getAluno(req.params.idAluno)
    .then(aluno => {
      res.render('deleteAlunoForm', {a: aluno, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
    })
});

/* GET Delete Confirmation */
router.get('/alunos/delete/:idAluno/confirm', (req,res)=>{
  Person.deleteAluno(req.params.idAluno)
    .then(resposta => {
      res.redirect('/')
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
    })
})

// POST Student Form Data
router.post('/alunos/registo', (req,res) => {
  var data = new Date().toISOString().substring(0, 16)
  Person.addAluno(req.body)
    .then(aluno => {
      res.render('addAlunoConfirm', {a: aluno})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro no armazenamento do registo de aluno"})
    })
})

// POST Student Update Form
router.post('/alunos/edit', (req,res) => {
  var data = new Date().toISOString().substring(0, 16)
  Person.updateAluno(req.body)
    .then(aluno => {
      res.render('updateAlunoConfirm', {a: aluno})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na alteração do registo de aluno"})
    })
})

module.exports = router;
