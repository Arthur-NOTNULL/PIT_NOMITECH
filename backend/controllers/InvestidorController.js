const Investidor = require('../models/InvestidorModel');
const Utils = require('./utils');

module.exports = {
    async singIn(req, res, next) {
        try {
            const {email, senha} = req.query;
            const verificaUsuario = await Utils.pesquisarUsuario(email, senha, Investidor);
            if (!verificaUsuario || verificaUsuario == null) return res.status(200).json({error: "E-mail ou senha não conferem"});
            if (verificaUsuario.status != "A") return res.status(200).json({error: "Esta conta está desativada"});
            return res.status(200).json(verificaUsuario);
        } catch (error) {
            next(error);
        }
    },

    async singUp(req, res, next) {
        try {
            const {nome, telefone, email, senha, data_nascimento, cpf} = req.body;
            const verificaUsuario = await Utils.pesquisarEmail(email, Investidor);

            if (verificaUsuario) return res.status(200).json({error: "Usuário já cadastrado"});

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

            return res.status(201).json(investidor);
        } catch (error) {
            next(error);
        }
    }
}
