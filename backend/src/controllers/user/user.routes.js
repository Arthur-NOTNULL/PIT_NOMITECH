const router = require('express').Router(); 
const auth = require('../../helpers/middlewares/auth.middleware');
const UserCotroller = require("./user.controller");

const BASE_PATH = '/'

router.get(BASE_PATH + 'me', auth, UserCotroller.me)

module.exports = router;