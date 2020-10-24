const { createInvestor, getInvestor } = require('../../services/investor.service');
const errorHandler = require('../../helpers/handler.error');
const { InvestorModel } = require('../../models');

const SingUp = async (req, res) => {
    const { nome, telefone, email, senha, data_nascimento, cpf } = req.body;
    try {
        const data = { nome, telefone, email, senha, data_nascimento, cpf }

        const checkIfInvestorExits = await InvestorModel.findOne({
            where: {
                email
            } 
        });

        if (checkIfInvestorExits) 
            throw errorHandler("Falha ao criar investidor", 400, [{ message: "E-mail já cadastrado"}]);

        createInvestor(data)
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
        getInvestor(email, senha)
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