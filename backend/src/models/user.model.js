const connection = require('../config/database');
const { DataTypes } = require('sequelize');

const {calcAge} = require('../utils/calcAge');

const User = connection.define('USUARIOS', {
    id: {
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
        }
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
            }
        }
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
        validate: {
            isDate: {
                msg: "Informe uma data válida"
            },
            isOldEnough(date) {
                const age = Number(calcAge(date));
                if (age < 18) throw new Error('Precisa ser maior de idade para acessar')
            }
        }
    },
    cpf: {
        type: DataTypes.TEXT
    },
    tipo: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo tipo não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe um tipo"
            }
        }
    }
}, {
    underscored: true,
    modelName: "USUARIOS",
    freezeTableName: true,
    timestamps: false,
    defaultScope: false
});

module.exports = User;