'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('INVESTIDOR', [{
        nome: 'Vinícius',
        telefone: '(31)98888-8888',
        email: "vinicius@gmail.com",
        senha: "vini1234",
        data_nascimento: "2003-04-19",
        cpf: "000.000.000-00"
      }, {
        nome: 'Lucas',
        telefone: '(31)97777-7777',
        email: "lucas@gmail.com",
        senha: "lucão1234",
        data_nascimento: "2002-10-04",
        cpf: "000.000.000-00"
      }, {
        nome: 'Thiago',
        telefone: '(31)96666-6666',
        email: "thiago@gmail.com",
        senha: "thiaguinho1234",
        data_nascimento: "2003-11-04",
        cpf: "000.000.000-00"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('INVESTIDOR', null, {});
  }
};
