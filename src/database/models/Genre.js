module.exports = (sequelize, dataTypes) => {
    const Genre = sequelize.define('Genres',
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        genre: {
            type: dataTypes.STRING
        }
    },
    {
        tablename: 'genres',
        timestamps: false
    });

    Genre.associate = (models) => {
        Genre.hasMany(models.Movies,{
            as: 'movies',
            foreignKey: 'id_genre'
        });
    }

    return Genre
}