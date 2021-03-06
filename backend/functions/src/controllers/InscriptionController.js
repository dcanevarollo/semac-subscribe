/**
 * @author Douglas Canevarollo
 * 
 * Controlador do módulo de inscrições. Lógica de negócios acoplada.
 */
const Inscription = require('../models/Inscriptions');
const Minicourse = require('../models/Minicourse');

const InscriptionValidation = require('../validations/InscriptionValidation');

module.exports = {

    /**
     * Verifica se o cadastro de determinado usuário já foi feito.
     * 
     * @param req : requisição HTTP recebida. O CPF de consulta estará na url. 
     * @param res : resposta HTTP que o servidor enviará ao emissor da requisição.
     * @returns {JSON} status e confirmação (se o cadastro já foi feito).
     */
    async show(req, res) {
        const { email } = req.params;

        const inscription = await Inscription.findOne({ email });

        if (inscription !== null) {
            return res.json({
                registered: true,
                inscriptionType: inscription.inscriptionType
            });
        }

        return res.json({ registered: false });
    },

    /**
     * Efetua o registro de uma inscrição.
     * 
     * @param req : requisição HTTP recebida. Seu corpo conterá os dados da inscrição.
     * @param res : resposta HTTP que o servidor enviará ao emissor da requisição.
     * @returns {JSON} status e mensagem de resposta.
     */
    async store(req, res) {
        /* Se a inscrição já foi feita, retorna uma mensagem. */
        if (await Inscription.exists({ cpf: req.body.cpf })) {
            return res.json({
                success: false,
                message: 'CPF já cadastrado.'
            });
        }

        if (await Inscription.exists({ email: req.body.email })) {
            return res.json({
                success: false,
                message: 'E-mail já cadastrado.'
            });
        }
        
        /* Busca os minicursos pelos códigos recebidos e salva seus _ids. */
        const minicourse1 = await Minicourse.findOne({ code: req.body.minicourse1 });
        
        const minicourse2 = await Minicourse.findOne({ code: req.body.minicourse2 });

        /* Faz a validação do formulário e retorna um JSON de erro, se houver. */
        const errorMessage = InscriptionValidation.validate(req.body, minicourse1, minicourse2);
        if (errorMessage !== '') {
            return res.json({
                success: false,
                message: errorMessage
            });
        }

        try {
            newInscription = await Inscription.create({
                name: req.body.name,
                email: req.body.email,
                cpf: req.body.cpf,
                inscriptionType: req.body.inscriptionType,
                tShirtSize: req.body.tShirtSize,
                wantInternship: req.body.wantInternship,
                wantMarathon: req.body.wantMarathon,
                wantGameChampionship: req.body.wantGameChampionship,
                shareLink: req.body.shareLink,
                minicourse1: minicourse1,
                minicourse2: minicourse2,
                github: req.body.github,
                linkedin: req.body.linkedin,
                otherLink: req.body.otherLink
            });

            /* Atualiza as vagas (decrementa-as). */
            if (minicourse1 !== null) {
                minicourse1.vacancies--;
                minicourse1.save();
            }
            
            if (minicourse2 !== null) {
                minicourse2.vacancies--;
                minicourse2.save();
            }
    
            return res.json({
                success: true,
                message: 'Sucesso! Sua inscrição será confirmada após você efetuar o pagamento.'
            });
        } catch (error) {
            console.log(error);

            return res.json({
                success: false,
                message: 'Erro interno. Tente novamente ou contate um administrador do sistema.'
            });
        }
    }

};
