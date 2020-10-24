const router = require('express').Router(); 
const InvestorCotroller = require("./investor.controller");

const BASE_PATH = '/'

router.post(BASE_PATH + 'singup', InvestorCotroller.SingUp)
      .post(BASE_PATH + 'singin', InvestorCotroller.SingIn)

module.exports = router;