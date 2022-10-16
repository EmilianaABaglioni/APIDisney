const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/charactersController');
const verifyTokenJWT = require('../middleware/verifyTokenJWT');

router.get('/', charactersController.list);

module.exports = router