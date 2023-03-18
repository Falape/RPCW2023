var axios =require('axios')

module.exports.getToDo = () => {
    return axios.get('http://localhost:3000/notes?Estado=todo')
        .then(response => response.data)
        .catch(error => error)
}

module.exports.getDone = () => {
    return axios.get('http://localhost:3000/notes?Estado=done')
        .then(response => response.data)
        .catch(error => error)
}

module.exports.getEntry = id => {
    return axios.get('http://localhost:3000/notes/' + id)
        .then(response => response.data)
        .catch(error => error)
}

module.exports.addEntry = note => {
    return axios.post('http://localhost:3000/notes', note)
        .then(response => response.data)
        .catch(error => error)
}

module.exports.editEntry = (note) => {
    return axios.put('http://localhost:3000/notes/' + note.id, note)
        .then(response => response.data)
        .catch(error => error)
}

module.exports.delete = id => {
    return axios.delete('http://localhost:3000/notes/' + id)
        .then(response => response.data)
        .catch(error => error)
}
