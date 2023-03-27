var mongoose = require('mongoose');

var MoradaSchema = new mongoose.Schema({
    cidade : String,
    distrito : String
});

var PartidoSchema = new mongoose.Schema({
    party_abbr : String,
    party_name : String,
});

var AtributosSchema = new mongoose.Schema({
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


var PersonSchema = new mongoose.Schema({
    id: String,
    nome: String,
    idade : Number,
    sexo: String,
    morada : MoradaSchema,
    descricao: String,
    cc: String,
    profissao: String,
    partido_politico: PartidoSchema,
    religiao: String,
    desportos: [String],
    animais: [String],
    figura_publica_pt : [String],
    marca_carro: String,
    destinos_favoritos : [String],
    atributos : AtributosSchema
});

//var studentModel = mongoose.model('student', studentSchema);

//module.exports = studentModel;

module.exports = mongoose.model('person', PersonSchema);
