const UserRoute = require("../controllers/user/user.routes");
const InvestorRoute = require("../controllers/investor/investor.routes"); 
const EntrepreneurRoute = require("../controllers/entrepreneur/entrepreneur.routes"); 

module.exports = (app) => {
    app.use('/auth', UserRoute);
    app.use('/investors/auth', InvestorRoute);
    app.use('/entrepreneurs/auth', EntrepreneurRoute);
}