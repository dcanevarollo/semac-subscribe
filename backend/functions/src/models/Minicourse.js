/**
 * @author Douglas Canevarollo
 * 
 * Modelo da coleção de mini-cursos.
 */
const { Schema, model } = require('mongoose');

const MinicourseSchema = new Schema({
    code: {  // Superchave para auxiliar na identificação do curso antes do POST.
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    vacancies: {
        type: Number,
        required: true
    }
}, {
    collection: 'minicourses'
});

module.exports = model('Minicourse', MinicourseSchema);
