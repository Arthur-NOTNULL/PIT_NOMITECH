const { getSignature } = require('../../services/signature.service');

const findSignature = (req, res) => {
    const { id } = req.params;

    getSignature(id)
        .then(signature => {
            res.status(200).json(signature);
        })
        .catch(error => {
            res.status(error.status).send(error);
        })
}

module.exports = {
    findSignature
}