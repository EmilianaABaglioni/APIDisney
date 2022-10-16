const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const verifyTokenJWT = require('../middleware/verifyTokenJWT');

router.get('/', verifyTokenJWT, moviesController.list);
router.get('/:id', verifyTokenJWT, moviesController.detail);
router.post('/', verifyTokenJWT, moviesController.create);
router.patch('/:id', verifyTokenJWT, moviesController.edit);
router.delete('/:id', verifyTokenJWT, moviesController.delete);

module.exports = router