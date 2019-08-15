/**
 * @author Douglas Canevarollo
 * 
 * Componente de rotas das requisições da API.
 */
const express = require('express');

const InscriptionController = require('./controllers/InscriptionController');

const routes = express.Router();

routes.post('/inscription', InscriptionController.store);

module.exports = routes;
