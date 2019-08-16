/**
 * @author Douglas Canevarollo
 * 
 * Controlador do módulo de inscrições. Lógica de negócios acoplada.
 */
const Inscription = require('../models/Inscriptions');
const Minicourse = require('../models/Minicourse');

module.exports = {

    /**
     * Efetua o registro de uma inscrição.
     * 
     * @param req : requisição HTTP recebida. Seu corpo conterá os dados da inscrição.
     * @param res : resposta HTTP que o servidor enviará ao emissor da requisição.
     * @returns JSON de resposta.
     */
    async store(req, res) {
        /* Se a inscrição já foi feita, retorna uma mensagem. */
        let newInscription = await Inscription.findOne({ cpf: req.body.cpf });
        if (newInscription != null) {
            return res.status(400).json({
                message: 'Already registered'
            });
        }
        
        /* Retorna um JSON contendo uma mensagem de erro caso os minicursos não sejam enviados. */
        const { minicoursesCodes } = req.body;
        if (minicoursesCodes == null) {
            return res.status(400).json({ 
                message: 'Codes not received' 
            });
        }

        /* Busca os minicursos pelos códigos recebidos e salva seus ids num array de ids. */
        const minicourses = await Minicourse.find({
            code: minicoursesCodes
        });

        let minicoursesIds = [];
        minicourses.map(minicourse => {
            minicoursesIds.push(minicourse._id);
        })

        newInscription = Inscription.create({
            name: req.body.name,
            cpf: req.body.cpf,
            inscriptionType: req.body.inscriptionType,
            tShirtSize: req.body.tShirtSize,
            wantInternship: req.body.wantInternship,
            wantMarathon: req.body.wantMarathon,
            wantGameChampionship: req.body.wantGameChampionship,
            minicourses: minicoursesIds,
            github: req.body.github,
            linkedin: req.body.linkedin,
            otherLink: req.body.otherLink
        });

        return res.json({
            success: true
        });
    }

};
