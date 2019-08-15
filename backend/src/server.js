/**
 * @author Douglas Canevarollo
 * 
 * Componente de configuração do servidor da aplicação.
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

/**
 * Rotas da aplicação.
 */
const routes = require('./routes');

/**
 * Inicialização do servidor Express.
 */
const httpServer = express();

/**
 * Interface de conexão com o banco de dados Mongo.
 */
mongoose.connect('mongodb+srv://dcanevarollo:j672fb3i@omnistack-1nrd1.mongodb.net/semac-inscriptions?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

/**
 * Configurações do servidor.
 */
httpServer.use(cors());
httpServer.use(express.json());
httpServer.use(routes);

httpServer.listen(8080);
