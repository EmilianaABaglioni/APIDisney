const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', (req, res) => {
    return res.json({msg: '/auth/login or /auth/register'})
});
router.post('/login', usersController.login);
router.post('/register', usersController.register);

module.exports = router