const InvestorRoute = require("../controllers/investor/investor.routes"); 

module.exports = (app) => {
    app.use('/investors', InvestorRoute);
}