module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('Users',
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        username: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        }
    },
    {
        tablename: 'users',
        timestamps: false
    });

    return User
}