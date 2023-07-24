const path = require('path');

const express = require('express');

const controller = require('../controller/controller')

const router = express.Router();

router.get('/', controller.index)


router.post('/user-login', controller.authenticated)

module.exports = router;