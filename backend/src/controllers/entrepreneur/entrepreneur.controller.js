const { createEntrepreneur, getEntrepreneur } = require('../../services/entrepreneur.service');
const errorHandler = require('../../helpers/handler.error');
const { EntrepreneurModel } = require('../../models');

const SingUp = async (req, res) => {
    const { nome, telefone, email, senha, data_nascimento, cpf } = req.body;
    try {
        const data = { nome, telefone, email, senha, data_nascimento, cpf }

        const checkIfEntrepreneurExits = await EntrepreneurModel.findOne({
            where: {
                email
            } 
        });

        if (checkIfEntrepreneurExits) 
            throw errorHandler("Falha ao criar empreendedor", 400, [{ message: "E-mail já cadastrado"}]);

            createEntrepreneur(data)
            .then(token => {
                res.status(201).json(token)
            })
            .catch(err => {
                res.status(err.status).send(err)
            })
    } catch (error) {
        res.status(error.status).send(error);
    }
}

const SingIn = async (req, res) => {
    const {email, senha} = req.body;
    try {
        getEntrepreneur(email, senha)
            .then(token => {
                res.status(201).json(token)
            })
            .catch(err => {
                res.status(err.status).send(err)
            })
    } catch (error) {
        res.status(error.status).send(error);
    }  
}

module.exports = {
    SingUp,
    SingIn
}