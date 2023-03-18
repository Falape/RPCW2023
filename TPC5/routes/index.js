var express = require('express');
var router = express.Router();

var Notes = require('../controller/note')


router.get('/', function(req, res, next) {
  Notes.getToDo()
    .then(todoNotes => {
      Notes.getDone()
        .then(doneNotes => {
          res.render('index', { todos: todoNotes, dones: doneNotes });
        })
    })
});

router.get('/done/:id', function(req, res) {
  Notes.getEntry(req.params.id)
    .then(note => {
      note.Estado = 'done'
      Notes.editEntry(note)
        .then(updatedNode  => {
          Notes.getToDo()
            .then(todoNotes => {
              Notes.getDone()
                .then(doneNotes => {
                  res.render('index', { todos: todoNotes, dones: doneNotes });
                })
            })
        })
    })
});

router.get('/undone/:id', function(req, res) {
  Notes.getEntry(req.params.id)
    .then(note => {
      note.Estado = 'todo'
      Notes.editEntry(note)
        .then(updatedNode  => {
          Notes.getToDo()
            .then(todoNotes => {
              Notes.getDone()
                .then(doneNotes => {
                  res.render('index', { todos: todoNotes, dones: doneNotes });
                })
            })
        })
    })
});

router.post('/createNote', function(req, res, next) {
  req.body.Estado = 'todo'
  Notes.addEntry(req.body)
    .then(data => {
      Notes.getToDo()
        .then(todoNotes => {
          Notes.getDone()
            .then(doneNotes => {
              res.render('index', { todos: todoNotes, dones: doneNotes });
            })
        })
    })
});


router.post('/editNote', function(req, res, next) {
  req.body.Estado = 'todo'
  Notes.editEntry(req.body)
    .then(data => {
      Notes.getToDo()
        .then(todoNotes => {
          Notes.getDone()
            .then(doneNotes => {
              res.render('index', { todos: todoNotes, dones: doneNotes });
            })
        })
    })
});


router.get('/delete/:id', function(req, res, next) {
  Notes.delete(req.params.id)
    .then(data => {
      Notes.getToDo()
        .then(todoNotes => {
          Notes.getDone()
            .then(doneNotes => {
              res.render('index', { todos: todoNotes, dones: doneNotes });
            })
        })
    })
});

module.exports = router;
