const { EntrepreneurModel } = require('../models');
const errorHandler = require('../helpers/handler.error');
const { GenerateToken } = require('./user.service');

const getEntrepreneur = async (email, password) => {
    const entrepreneur = await EntrepreneurModel.findOne({
        where: {
            email: email,
            senha: password
        }
    })

    if (entrepreneur) {
        return GenerateToken(entrepreneur.toJSON());
    }

    throw errorHandler('Falha no login', 401, [{message: 'usuário ou senha incorretos'}]); 
}

const createEntrepreneur = async (entrepreneur) => {
    try {
        const entrepreneurCreated = await EntrepreneurModel.create(entrepreneur);
        return GenerateToken(entrepreneurCreated.toJSON());
    } catch (error) {
        console.log(TypeError(error));
        throw errorHandler("Falha ao criar empreendedor", 400, error.errors);
    }
}

module.exports = {
    createEntrepreneur,
    getEntrepreneur,
}
