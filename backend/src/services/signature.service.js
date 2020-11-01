const { SignatureModel } = require('../models');
const signatureView = require('../views/signature.view');
const errorHandler = require('../helpers/handler.error');

const createSignature = async (signature) => {
    try {
        const signatureCreated = await SignatureModel.create(signature);
        return signatureView.render(signatureCreated);
    } catch (error) {
        throw errorHandler("Falha ao criar assinatura", 400, error.errors);      
    }
}

const getSignature = async (userId) => {
    const signature = await SignatureModel.findOne({ 
        where: { id_usuario: userId }
    });

    if (signature) {
        return signatureView.render(signature);
    }

    throw errorHandler('Assinatura não encontrada', 401);
}

module.exports = {
    createSignature,
    getSignature
}