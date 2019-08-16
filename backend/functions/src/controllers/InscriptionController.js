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

        /* Busca os minicursos pelos códigos recebidos e salva seus _ids. */
        const minicourse1 = await Minicourse.findOne({ code: req.body.minicourse1 });

        const minicourse2 = await Minicourse.findOne({ code: req.body.minicourse2 });

        newInscription = Inscription.create({
            name: req.body.name,
            cpf: req.body.cpf,
            inscriptionType: req.body.inscriptionType,
            tShirtSize: req.body.tShirtSize,
            wantInternship: req.body.wantInternship,
            wantMarathon: req.body.wantMarathon,
            wantGameChampionship: req.body.wantGameChampionship,
            minicourse1: minicourse1,
            minicourse2: minicourse2,
            github: req.body.github,
            linkedin: req.body.linkedin,
            otherLink: req.body.otherLink
        });

        return res.json({
            success: true
        });
    }

};
