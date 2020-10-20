const { InvestorModel } = require('../models');
const errorHandler = require('../middlewares/handler.error');

const createInvestor = async (investor) => {
    try {
        const investorCreated = await InvestorModel.create(investor);
        return investorCreated;
    } catch (error) {
        console.log(TypeError(error));
        throw errorHandler("Falha ao criar investidor", 400, error.errors);
    }
}

module.exports = {
    createInvestor,
}