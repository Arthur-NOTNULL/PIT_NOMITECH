const errorHandler = require('../helpers/handler.error');
const jwt = require('jsonwebtoken');

require('dotenv/config');

const SECRETE_KEY = process.env.SECRETE_KEY;

const GenerateToken = (data) => {
    let token = jwt.sign(data, SECRETE_KEY);
    //base64
    token = Buffer.from(token).toString('base64');
    return { token }
}

const DecryptToken = (token) => {
    return Buffer.from(token, 'base64').toString('utf-8');
}

const me = async (token) => {
    try{
        const decryptedToken = DecryptToken(token)
        return jwt.verify(decryptedToken, SECRETE_KEY);
    } catch(error) {
        throw errorHandler("Token enviado vencido ou inválido", 401);
    }
}

module.exports = {
    GenerateToken,
    me
}