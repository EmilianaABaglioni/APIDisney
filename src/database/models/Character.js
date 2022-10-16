module.exports = (sequelize, dataTypes) => {
    const Character = sequelize.define('Characters',
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        fullname: {
            type: dataTypes.STRING
        },
        age: {
            type: dataTypes.INTEGER
        },
        history: {
            type: dataTypes.STRING
        }
    },
    {
        tablename: 'characters',
        timestamps: false
    });

    Character.associate = (models) => {
        Character.belongsToMany(models.Movies,
            {
                as: 'movies',
                through: 'character_movie',
                foreingKey: 'idCharacter',
                otherKey: 'idMovie'
            })
    }

    return Character
}