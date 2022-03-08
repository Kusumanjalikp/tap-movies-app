const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        moviename: {
            type: DataTypes.STRING,
            allowNull: true
        },
        actors: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        language: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, 
    {
        FreezeTableName: true,
        timestamps: true,
        schema: 'public',
    });

    return Movie;
}
