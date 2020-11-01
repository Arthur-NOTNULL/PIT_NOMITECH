module.exports = {
    render(signature) {
        return {
            tipo: signature.tipo,
            descricao: signature.descricao,
            data_inicio: signature.data_inicio
        }
    }
}