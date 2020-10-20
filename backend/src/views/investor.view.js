module.exports = {
    render(investidor) {
        return {
            id: investidor.id_investidor,
            nome: investidor.nome,
            telefone: investidor.telefone,
            email: investidor.email,
            data_nascimento: investidor.data_nascimento,
            cpf: investidor.cpf
        }
    }
}