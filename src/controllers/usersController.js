const db = require('../database/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sequelize = db.sequelize;

const usersController = {
    register: (req, res) => {
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                const createUser = {
                    username: req.body.username,
                    password: bcrypt.hashSync(req.body.password, 10),
                    name: req.body.name,
                    email: req.body.email
                }

            db.Users
            .create(createUser)
            .then((user) => {
                    const token = jwt.sign({ id: user.id, username: user.username }, 'secretKey', { expiresIn: '7d' })

                    return res.status(201).json({
                            msg: 'Usuario registrado',
                            user: {
                                 id: user.id,
                                username: user.username
                            },
                            token
                        })
                    })
            .catch(error => { console.log(error) })
                } else {
                    res.json({ msg: 'The email is already associated with an account' })
                }
            })
        .catch(err => { console.log(err) })

    },
    login: (req, res) => {
        db.Users.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(userInDb => {
            if (userInDb != undefined && bcrypt.compareSync(req.body.password, userInDb.password)) {
                const token = jwt.sign({ id: userInDb.id, username: userInDb.username }, 'secretKey', { expiresIn: '7d' })

                return res.json({
                    msg: 'User logged',
                    user: {
                        id: userInDb.id,
                         username: userInDb.username
                    },
                    token
                })

            } else {
                return res.json({ msg: 'Invalid credentials' })
            }
        })
        .catch(error => console.log(error))
    }
}

module.exports = usersController