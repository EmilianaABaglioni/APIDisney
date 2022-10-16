const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const verifyTokenJWT = require('../middleware/verifyTokenJWT');

router.get('/', moviesController.list);

module.exports = router