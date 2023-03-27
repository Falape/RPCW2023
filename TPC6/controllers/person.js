var Person = require('../models/person')

// Person list
module.exports.list = () => {
    return  Person.find({id: "p1"},{id:1})
    .then(docs => {
        console.log(docs)
        return docs
    })
    .catch(error => {
        return error
    })
}

module.exports.getAluno = id => {
    return axios.get('http://localhost:3000/alunos/' + id)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addAluno = a => {
    return axios.post('http://localhost:3000/alunos', a)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.updateAluno = a => {
    return axios.put('http://localhost:3000/alunos/' + a.id, a)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deleteAluno = id => {
    return axios.delete('http://localhost:3000/alunos/' + id)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}