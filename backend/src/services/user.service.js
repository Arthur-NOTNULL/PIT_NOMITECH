const {UserModel} = require('../models');
const userView = require('../views/user.view');
const errorHandler = require('../helpers/handler.error');
const jwt = require('jsonwebtoken');

require('dotenv/config');

const SECRETE_KEY = process.env.SECRETE_KEY;

const generateToken = (data) => {
    let token = jwt.sign(data, SECRETE_KEY);
    //base64
    return { token: Buffer.from(token).toString('base64') }
}

const decryptToken = (token) => {
    return Buffer.from(token, 'base64').toString('utf-8');
}

const createUser = async (user) => {
    try {
        const userCreated = await UserModel.create(user);
        return userView.render(userCreated);
    } catch (error) {
        throw errorHandler("Falha ao criar usuário", 400, error.errors);      
    }
}

const getUser = async (email, password) => {
    const user = await UserModel.findOne({ 
        where: { 
            email: email, 
            senha: password
        } 
    });

    if (user) {
        return generateToken(user.toJSON());
    }

    throw errorHandler('Falha no login', 401, [{ message: 'E-mail ou senha inválidos' }]);
}

const me = async (token) => {
    try{
        const decryptedToken = decryptToken(token)
        return jwt.verify(decryptedToken, SECRETE_KEY);
    } catch(error) {
        throw errorHandler("Token enviado vencido ou inválido", 401);
    }
}

module.exports = {
    createUser, 
    getUser,
    me
}