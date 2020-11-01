const connection = require('../config/database');
const { DataTypes } = require('sequelize');

const SignatureModel = connection.define("ASSINATURAS", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    data_inicio: {
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
        },
    },
    tipo: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: {
                msg: "Campo tipo de assinatura não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe o tipo de assinatura"
            },
        },
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo descricao não pode ser vazio"
            },
            notNull: {
                msg: "Por favor informe a descricao da assinatura"
            },
        },
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'USUARIOS',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}, {
    underscored: true,
    modelName: "ASSINATURAS",
    freezeTableName: true,
    timestamps: false,
    defaultScope: false
});


module.exports = SignatureModel;