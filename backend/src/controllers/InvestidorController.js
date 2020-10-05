const InvestidorModel = require('../models/InvestidorModel');

module.exports = {
    async index(req, res, next) {
        try {
            const investidores = await InvestidorModel.findAll();
            return res.send(investidores);
        } catch (error) {
            next(error);
        }
    },

    async create(req, res, next) {
        try {
            const props = req.body;
            const investidor = await InvestidorModel.create(props);
      
            return res.status(201).send(investidor);
        } catch (error) {
            next(error);
        }
    }
}
