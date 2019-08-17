/**
 * @author Douglas Canevarollo
 * 
 * Componente de validação do modelo de inscrições.
 */

module.exports = {

    /**
     * Valida o CPF segundo o algoritmo da Receita Federal.
     * 
     * @param {String} cpf : CPF a ser validado.
     * @returns {Boolean} true se é válido, false se não.
     */
    validCPF(cpf) {
        /* Remove os pontos e hífens do CPF original. */
        const strCpf = cpf.replace('.', '').replace('.', '').replace('-', '');
    
        let sum = 0, rest;

        if (strCpf == '00000000000') {
            return false;
        }

        for (i = 1; i <= 9; i++) {
            sum += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
        }

        rest = (sum * 10) % 11;

        if (rest == 10 || rest == 11) {
            rest = 0;
        }

        if (rest != parseInt(strCpf.substring(9, 10))) {
            return false;
        }

        sum = 0;
        for (i = 1; i <= 10; i++) {
            sum += parseInt(strCpf.substring(i - 1, i)) * (12 - i);
        }

        rest = (sum * 10) % 11;

        if (rest == 10 || rest == 11) {
            rest = 0;
        }

        if (rest != parseInt(strCpf.substring(10, 11))) {
            return false;
        }

        return true;
    },

    /**
     * Faz a validação de todos os campos.
     * 
     * @param {Object} inscription : conterá o corpo da requisição enviada pelo cliente.
     * @returns {String} mensagem de erro, se houver.
     */
    validate(inscription) {
        /* Validação de campos em brancos. */
        if (inscription.name == "" 
            || inscription.cpf == "" 
            || inscription.inscriptionType == "" 
            || inscription.tShirtSize == "" 
            || inscription.wantInternship == null 
            || inscription.wantMarathon == null 
            || inscription.wantGameChampionship == null
            || inscription.shareLink == null 
            || inscription.minicourse1 == "" 
            || inscription.minicourse2 == "") {
            return 'The request have some blank fields'        
        }

        /* Valida o formato do CPF. */
        const cpfPattern = new RegExp("([0-9]{2}\.[0-9]{3}\.[0-9]{3}[\/]?[0-9]{4}-[0-9]{2})|" + 
            "([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})", "g")
        if (!cpfPattern.test(inscription.cpf)) {
            return 'Invalid CPF format'
        }

        /* Verifica a veracidade do CPF. */
        if (!this.validCPF(inscription.cpf)) {
            return 'Invalid CPF'
        }

        return '';
    }

}
