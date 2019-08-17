/**
 * @author Douglas Canevarollo
 * 
 * Modelo da coleção de inscrições.
 */
const { Schema, model } = require('mongoose');

const InscriptionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    inscriptionType: {
        type: String,
        required: true
    },
    tShirtSize: {
        type: String,
        required: true
    },
    wantInternship: {  // Quer estágio ou vaga de emprego.
        type: Boolean,
        required: true
    },
    wantMarathon: {  // Quer participar da maratona de programação.
        type: Boolean,
        required: true
    },
    wantGameChampionship: {  // Quer participar do campeonato de jogos.
        type: Boolean,
        required: true
    },
    shareLink: {  // Permite o compartilhamento de seus dados.
        type: Boolean,
        required: true
    },
    minicourse1: {
        type: Schema.Types.ObjectId,
        ref: 'Minicourse'
    },
    minicourse2: {
        type: Schema.Types.ObjectId,
        ref: 'Minicourse'
    },
    /* Campos opcionais, apenas preenchidos caso o usuário opte pelo estágio/vaga de emprego. */
    github: String,
    linkedin: String,
    otherLink: String
}, {
    collection: 'inscriptions',
    timestamps: true  // Carimbo de data e hora da criação da coleção.
});

module.exports = model('Inscription', InscriptionSchema);
