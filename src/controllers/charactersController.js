const db = require('../database/models');
const sequelize = db.sequelize;

const charactersController = {
    list: (req, res) => {
        db.Characters.findAll({
            attributes: ['id', 'fullname']
        })
        .then(characters => {
            characters.forEach(character => {
               character.dataValues.detail = req.protocol + '://' + req.get('host') + req.originalUrl + '/' + character.id
              })
              return res.json({
                count: characters.length,
                characters: characters
              })
        })
        .catch(err => {console.log(err)})
    },
    detail: (req, res) => {
        db.Characters.findByPk(req.params.id,{ include: ['movies'] })
            .then(characterDetail => {
              return res.json({ characterDetail })
            })
            .catch(error => console.log(error))
    },
    create: (req, res) => {
        const characterNew = {
            fullname: req.body.fullname,
            age: req.body.age,
            history: req.body.history
        }

        db.Characters.create(characterNew)
        .then(character => {
            return res.json({character})
        })
        .catch(error => {console.log(error)})
    },
    edit: (req, res) => {
        const idCharacter = req.params.id
        db.Characters.update({
            fullname: req.body.fullname,
            age: req.body.age,
            history: req.body.history
          }, {
            where: {
              id: idCharacter
            }
          })
        .then(character => {
            return res.json({msg: 'Successful edited'})
        })
        .catch(error => console.log(error));
    },
    delete: (req, res) => {
        const id = req.params.id;
        db.Characters
          .destroy(
            {
              where: {
                id
              }
            })
          .then(() => {
            res.json({msg: 'deleted'})
          })
    }
}

module.exports = charactersController