var mongoose = require('mongoose');

var moradaSchema = new mongoose.Schema({
    cidade : String,
    distrito : String
});

var partidoSchema = new mongoose.Schema({
    party_abbr : String,
    party_name : String,
});

var atributosSchema = new mongoose.Schema({
    fumador : Boolean,
    gosta_cinema : Boolean,
    gosta_viajar : Boolean,
    acorda_cedo : Boolean,
    gosta_ler : Boolean,
    gosta_musica : Boolean,
    gosta_comer : Boolean,
    gosta_animais_estimacao : Boolean,
    gosta_dancar : Boolean,
    comida_favorita : String
});


var personSchema = new mongoose.Schema({
    id: String,
    nome: String,
    idade : String,
    morada : moradaSchema,
    BI: String,
    descrição: String,
    profissão: String,
    partido_politico: partidoSchema,
    religião: String,
    desportos: [String],
    animais: [String],
    figura_publica_pt : [String],
    marca_carro: String,
    destinos_favoritos : [String],
    atributos : atributosSchema
});

//var studentModel = mongoose.model('student', studentSchema);

//module.exports = studentModel;

module.exports = mongoose.model('person', personSchema);
