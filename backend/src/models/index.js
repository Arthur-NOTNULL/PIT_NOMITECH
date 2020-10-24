const InvestorModel = require("./investor.model");
const EntrepreneurModel = require("./entrepreneur.model");
const AsignatureModel = require("./asignature.model");

EntrepreneurModel.hasOne(AsignatureModel, { foreignKey: 'assinatura_cod_assinatura' })

module.exports ={
    InvestorModel,
    EntrepreneurModel,
    AsignatureModel
}