const { InvestorModel } = require('../models');
const errorHandler = require('../helpers/handler.error');
const { GenerateToken } = require('./user.service');

const getInvestor = async (email, password) => {
    const investor = await InvestorModel.findOne({
        where: {
            email: email,
            senha: password
        }
    })

    if (investor) {
        return GenerateToken(investor.toJSON());
    } 

    throw errorHandler('Falha no login', 401, [{ message: 'E-mail ou senha inválidos' }]);
}

const createInvestor = async (investor) => {
    try {
        const investorCreated = await InvestorModel.create(investor);
        return GenerateToken(investorCreated.toJSON());
    } catch (error) {
        console.log(TypeError(error));
        throw errorHandler("Falha ao criar investidor", 400, error.errors);
    }
}

module.exports = {
    createInvestor,
    getInvestor,
}