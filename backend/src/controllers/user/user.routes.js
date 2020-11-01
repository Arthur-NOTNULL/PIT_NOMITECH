const router = require('express').Router(); 
const UserCotroller = require("./user.controller");
const { 
    authentication, 
    authorization 
} = require('../../helpers/middlewares/auth.middleware');

const BASE_PATH = '/'

module.exports = router
    .get(BASE_PATH + 'me', authentication, authorization('investidor', 'empreendedor'), UserCotroller.me)
    .post(BASE_PATH + 'singin', UserCotroller.singIn)
    .post(BASE_PATH + 'singup', UserCotroller.singUp);