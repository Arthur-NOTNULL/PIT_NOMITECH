const {me} = require("../../services/user.service")

const authentication = (req, res, next) => {
    const auth = req.header('Authorization');
    if (auth && auth.includes('Bearer ')) {
        const token = auth.split(' ')[1]
        me(token).then(user => {
            req.user = user;
            next();
        }).catch(err => {
            res.status(err.status).send(err)
        })
    } else {
        res.sendStatus(401);
    }
} 

const authorization = (...permittedRoles) => (req, res, next) => {
    if (req.user && permittedRoles.includes(req.user.tipo)) {
        next();
    } else {
        res.sendStatus(403);
    }
}


module.exports = {
    authentication,
    authorization
}
