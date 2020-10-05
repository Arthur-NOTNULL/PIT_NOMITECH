const routes = require('express').Router();

const InvestidorController = require('./controllers/InvestidorController');

routes.get('/investidor', InvestidorController.index);
routes.post('/investidor', InvestidorController.create);

module.exports = routes;