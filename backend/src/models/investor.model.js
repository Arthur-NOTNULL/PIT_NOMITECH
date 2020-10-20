const connection = require("../config/database");
const { DataTypes } = require('sequelize');
const {calcAge} = require('../utils/calcAge');

const InvestidorModel = connection.define("INVESTIDOR", {
    id_investidor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo nome não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe seu nome"
            }
        },
    },
    telefone: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: {
                msg: "Campo telefone não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe seu telefone"
            },
        },
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo e-mail não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe seu e-mail"
            },
            isEmail: {
                msg: "Informe um e-mail válido"
            }
        },
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo senha não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe uma senha"
            },
        },
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo data de nascimento não pode ser vazio"
            },
            isDate: {
                msg: "Informe uma data válida"
            }, 
            notNull: {
                msg: "Por favor informe sua data de nascimento"
            },
            isOldEnough(date) {
                const age = Number(calcAge(date));
                if (age < 18) throw new Error('Precisa ser maior de idade para acessar')
            },
        },
    },
    cpf: {
        type: DataTypes.CHAR(19),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo cpf não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe seu cpf"
            }
        },
    },
    status: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo status não pode ser vazio"
            },
            notNull: {
                msg: "Campo status não pode ser vazio"
            }
        },
        
    }
}, {
    underscored: true,
    modelName: "INVESTIDOR",
    freezeTableName: true,
    timestamps: false,
    defaultScope: false
});

module.exports = InvestidorModel; 