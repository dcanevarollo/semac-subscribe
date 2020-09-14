/**
 * @author Douglas Canevarollo
 * 
 * Componente de configuração do servidor da aplicação.
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const functions = require('firebase-functions');

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
mongoose.connect('mongodb://<username>:<password>@semaccluster-shard-00-00-iy3lh.mongodb.net:27017,semaccluster-shard' +
    '-00-01-iy3lh.mongodb.net:27017,semaccluster-shard-00-02-iy3lh.mongodb.net:27017/semac-inscriptions?ssl=true&' + 
    'replicaSet=SemacCluster-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true
});

/**
 * Configurações do servidor.
 */
httpServer.use(cors({ origin: true }));
httpServer.use(express.json());
httpServer.use(routes);

/**
 * Exporta o módulo do Cloud Functions do Firebase..
 */
exports.httpServer = functions.https.onRequest(httpServer);
