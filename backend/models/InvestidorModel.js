const {Sequelize, Model, DataTypes} = require('sequelize');

class Investidor extends Model{
    static init(sequelize) {
        super.init({
            id_investidor:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(),
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING(),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(),
                allowNull: false
            },
            data_nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            cpf: {
                type: DataTypes.STRING(),
                allowNull: false
            },
            status: {
                type: DataTypes.CHAR(1),
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'INVESTIDOR',
            freezeTableName: true,
            timestamps: false,
            defaultScope: false,
            underscored: true
        })
    }   
}

module.exports = Investidor;