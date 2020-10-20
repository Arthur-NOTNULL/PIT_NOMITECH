const router = require('express').Router(); 
const InvestorCotroller = require("./investor.controller");

const BASE_PATH = '/'

router.post(BASE_PATH, InvestorCotroller.SingUp)

module.exports = router;