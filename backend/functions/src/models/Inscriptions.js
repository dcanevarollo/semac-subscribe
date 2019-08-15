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
    wantInternship: {
        type: Boolean,
        required: true
    },
    wantMarathon: {
        type: Boolean,
        required: true
    },
    wantGameChampionship: {
        type: Boolean,
        required: true
    },
    minicourses: [{  // Lista de mini-cursos que o usuário escolheu.
        type: Schema.Types.ObjectId,
        ref: 'Minicourse'
    }]
}, {
    collection: 'inscriptions',
    timestamps: true  // Carimbo de data e hora da criação da coleção.
});

module.exports = model('Inscription', InscriptionSchema);
