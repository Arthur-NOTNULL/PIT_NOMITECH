const Investidor = require('../models/InvestidorModel');
const Utils = require('./utils');

module.exports = {
    async singIn(req, res, next) {
        try {
            const {email, senha} = req.body;
            const verificaUsuario = await Utils.pesquisarUsuario(email, senha, Investidor);
            if (!verificaUsuario || verificaUsuario == null) return res.json({error: "E-mail ou senha não conferem"}).sendStatus(200);
            return res.json(verificaUsuario).sendStatus(200);
        } catch (error) {
            next(error);
        }
    },

    async singUp(req, res, next) {
        try {
            const {nome, telefone, email, senha, data_nascimento, cpf} = req.body;
            const verificaUsuario = await Utils.pesquisarEmail(email, Investidor);

            if (verificaUsuario) return res.json({error: "E-mail inválido ou já existe"}).sendStatus(200);

            const status = 'A';
            const investidor = await Investidor.create({
                nome,
                telefone,
                email,
                senha,
                data_nascimento,
                cpf,
                status
            });

            return res.json(investidor).sendStatus(201);
        } catch (error) {
            next(error);
        }
    }
}
