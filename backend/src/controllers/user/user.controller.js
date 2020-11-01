const { createUser, getUser } = require('../../services/user.service');
const { createSignature } = require('../../services/signature.service');
const { UserModel } = require('../../models');
const UserView = require('../../views/user.view');

const errorHandler = require('../../helpers/handler.error');

const singUp = async (req, res) => {
    const { nome, telefone, email, senha, data_nascimento, cpf, tipo } = req.body;
   
    const date = new Date;

    try {
        const userData = { nome, telefone, email, senha, data_nascimento, cpf, tipo }

        const checkIfUserExits = await UserModel.findOne({
            where: {
                email
            } 
        });

        if (checkIfUserExits) 
            throw errorHandler("Falha ao criar usuário", 400, [{ message: "E-mail já cadastrado", type: "Validation Error"}]);
        
        const user = await createUser(userData);

        const signatureData = { 
            data_inicio: date.toLocaleDateString(),
            tipo: 'GRATUITO',
            descricao: 'plano gratuito',
            id_usuario: user.id
        }

        const signature = await createSignature(signatureData);

        return res.status(201).json({user, signature})
        
    } catch (error) {
        res.status(error.status).send(error);
    }    
}

const singIn = (req, res) => {
    const { email, senha } = req.body;

    getUser(email, senha)
        .then(token => {
            res.status(201).json(token);
        })
        .catch(error => {
            res.status(error.status).send(error);
        })
}

const me = (req, res) => {
    res.send(UserView.render(req.user)); 
}

module.exports = {
    singUp,
    singIn,
    me,
}