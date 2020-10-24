module.exports = {
    render(user) {
        return {
            id: user.id,
            nome: user.nome,
            telefone: user.telefone,
            email: user.email,
            data_nascimento: user.data_nascimento,
            cpf: user.cpf,
            iat: user.iat
        }
    }
}