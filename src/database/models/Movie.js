module.exports = (sequelize, dataTypes) => {
    const Movie = sequelize.define('Movies',
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
        created: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        },
        qualification: {
            type: dataTypes.INTEGER
        },
        id_genre: {
            type: dataTypes.INTEGER
        }
    },
    {
        tablename: 'movies',
        timestamps: false
    });

    Movie.associate = (models) => {
        Movie.belongsTo(models.Genres,
            {
                as: 'genre',
                foreingKey: 'id_genre'
            })
    }

    Movie.asssociate = (models) => {
        Movie.belongsToMany(models.Characters,
            {
                as: 'characters',
                through: 'character_movie',
                foreingKey: 'idMovie',
                otherKey: 'idCharacter'
            })
    }

    return Movie
}