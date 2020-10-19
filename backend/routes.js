const routes = require('express').Router();

const InvestidorController = require('./controllers/Investidor.controller');

routes.get('/investidor', InvestidorController.singIn);
routes.post('/investidor', InvestidorController.singUp);

module.exports = routes;