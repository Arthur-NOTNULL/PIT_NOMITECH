const router = require('express').Router(); 
const SignatureController = require("./signature.controller");

const BASE_PATH = '/'
const PARAM_ID = ':id'

module.exports = router
    .get(BASE_PATH + PARAM_ID, SignatureController.findSignature)