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

        /* Consideramos, primeiro, CPFs de sequências de números iguais como erro. */
        if (strCpf == '00000000000' 
            || strCpf == '11111111111' 
            || strCpf == '22222222222' 
            || strCpf == '33333333333'
            || strCpf == '44444444444' 
            || strCpf == '55555555555' 
            || strCpf == '66666666666' 
            || strCpf == '77777777777' 
            || strCpf == '88888888888'
            || strCpf == '99999999999') {
            return false;
        }

        /* Verificação do 1º dígito verificador. */
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

        /* Verificação do 2º dígito verificador. */
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
    validate(inscription, minicourse1, minicourse2) {
        /* Validação de campos em brancos. */
        if (inscription.name == "" 
            || inscription.email == ""
            || inscription.cpf == "" 
            || inscription.inscriptionType == "" 
            || inscription.tShirtSize == "" 
            || inscription.wantInternship == null 
            || inscription.wantMarathon == null 
            || inscription.wantGameChampionship == null
            || inscription.shareLink == null) {
            return 'Por favor, preencha todos os campos obrigatórios.'        
        }

        /* Verifica se há vagas disponíveis nos minicursos escolhidos. */
        if (minicourse1 !== null && minicourse1.vacancies <= 0) {
            return `O minicurso ${minicourse1.name} está com as vagas esgotadas.`;
        }
        
        if (minicourse2 !== null && minicourse2.vacancies <= 0) {
            return `O minicurso ${minicourse2.name} está com as vagas esgotadas.`;
        }

        /* Valida o formato do e-mail. */
        const emailPattern = new RegExp("^[\\w-_.+]*[\\w-_.]@([\\w]+\\.)+[\\w]+[\\w]$", "g");
        if (!emailPattern.test(inscription.email)) {
            return 'Por favor, forneça um e-mail válido.';
        }

        /* Valida o formato do CPF. */
        const cpfPattern = new RegExp("([0-9]{2}\.[0-9]{3}\.[0-9]{3}[\/]?[0-9]{4}-[0-9]{2})|" + 
            "([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})", "g")
        if (!cpfPattern.test(inscription.cpf)) {
            return 'Por favor, forneça um CPF no formato XXX.XXX.XXX-XX.'
        }

        /* Verifica a veracidade do CPF. */
        if (!this.validCPF(inscription.cpf)) {
            return 'Por favor, forneça um CPF válido.'
        }

        return '';
    }

}
