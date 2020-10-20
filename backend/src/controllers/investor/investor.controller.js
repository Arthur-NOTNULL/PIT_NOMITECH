const { createInvestor } = require('../../services/investor.service');
const errorHandler = require('../../middlewares/handler.error');
const { InvestorModel } = require('../../models');
const { render } = require('../../views/investor.view');

const SingUp = async (req, res) => {
    const { nome, telefone, email, senha, data_nascimento, cpf } = req.body;
    const status = 'A';
    try {
        const data = { nome, telefone, email, senha, data_nascimento, cpf, status }

        const checkIfInvestorExits = await InvestorModel.findOne({
            where: {
                email
            } 
        });

        if (checkIfInvestorExits) 
            throw errorHandler("Falha ao criar investidor", 400, [{ message: "E-mail já cadastrado"}]);

        createInvestor(data)
            .then(investorCreated => {
                res.status(201).json(render(investorCreated))
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
}