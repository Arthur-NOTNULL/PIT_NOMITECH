const UserRoute = require("../controllers/user/user.routes");
const SignatureRoute = require('../controllers/signature/signature.routes');

module.exports = (app) => {
    app.use('/auth', UserRoute);
    app.use('/signatures', SignatureRoute);
}