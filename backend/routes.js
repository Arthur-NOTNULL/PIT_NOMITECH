const routes = require('express').Router();

const InvestidorController = require('./controllers/InvestidorController');

routes.get('/investidor', InvestidorController.singIn);
routes.post('/investidor', InvestidorController.singUp);

module.exports = routes;