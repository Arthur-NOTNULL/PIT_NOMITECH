const {ValidationError} = require('yup')

const errorHandler = (error, req, res, next) => {
    if (error.name === "ValidationError") {
        return res.status(400).json({ message: 'Falha na validação', errors: error.errors});
    }
    
    return res.status(500).json({message: 'Erro interno do servidor'});
}

module.exports = errorHandler;