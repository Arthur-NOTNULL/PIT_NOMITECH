module.exports = {
    async pesquisarEmail(email, tipo) {
        const result = await tipo.findOne({
                            where: {
                                email
                            }
                        })
        return result;
    },

    async pesquisarUsuario(email, senha, tipo) {
        const result = await tipo.findOne({
                            where: {
                                email,
                                senha
                            }
                        })
        return result;
    }
}