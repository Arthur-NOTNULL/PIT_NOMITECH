const Investidor = require('../models/Investidor.model');
const InvestidorView = require('../views/Investidor.view');
const Yup = require('yup');
const Utils = require('./utils');

module.exports = {
    async singIn(req, res, next) {
        try {
            const {email, senha} = req.query;
            const verificaInvestidor = await Utils.pesquisarUsuario(email, senha, Investidor);
            if (!verificaInvestidor || verificaInvestidor == null) return res.status(400).json({error: "E-mail ou senha não conferem"});
            if (verificaInvestidor.status != "A") return res.status(200).json({error: "Esta conta está desativada"});
            return res.status(200).json(InvestidorView.render(verificaInvestidor));
        } catch (error) {
            next(error);
        }
    },

    async singUp(req, res, next) {
        const { nome, telefone, email, senha, data_nascimento, cpf } = req.body;

        try {
            const status = 'A';

            const data = { nome, telefone, email, senha, data_nascimento, cpf, status }

            const schema = Yup.object().shape({
                nome: Yup.string().required(),
                telefone: Yup.string().required(),
                email: Yup.string().email().required(),
                senha: Yup.string().required(),
                data_nascimento: Yup.date().required(),
                cpf: Yup.string().required(),
                status: Yup.string().required()
            })

            await schema.validate(data, {
                abortEarly: false
            })

            const verificaUsuario = await Utils.pesquisarEmail(email, Investidor);

            if (verificaUsuario) return res.status(400).json({message: "Falha no cadastro", errors: ["E-mail já cadastrado"]});

            const investidor = await Investidor.create(data);

            return res.status(201).json(investidor);
        } catch (error) {
            next(error);
        }
    }
}
