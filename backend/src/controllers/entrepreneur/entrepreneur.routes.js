const router = require('express').Router(); 
const EntrepreneurCotroller = require("./entrepreneur.controller");

const BASE_PATH = '/'

router.post(BASE_PATH + 'singup', EntrepreneurCotroller.SingUp)
      .post(BASE_PATH + 'singin', EntrepreneurCotroller.SingIn)

module.exports = router;