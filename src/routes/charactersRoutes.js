const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/charactersController');
const verifyTokenJWT = require('../middleware/verifyTokenJWT');

router.get('/', verifyTokenJWT, charactersController.list);
router.get('/:id', verifyTokenJWT, charactersController.detail);
router.post('/', verifyTokenJWT, charactersController.create);
router.patch('/:id', verifyTokenJWT, charactersController.edit);
router.delete('/:id', verifyTokenJWT, charactersController.delete);

module.exports = router