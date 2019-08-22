/**
 * @author Douglas Canevarollo
 * 
 * Componente de rotas das requisições da API.
 */
const express = require('express');

const InscriptionController = require('./src/controllers/InscriptionController');

const routes = express.Router();

/**
 * Rota para a requisição POST da inscrição.
 */
routes.post('/inscription', InscriptionController.store);

/**
 * Rota para a requisição GET da inscrição (se já foi efetuada).
 */
routes.get('/inscription/:email', InscriptionController.show);

module.exports = routes;
