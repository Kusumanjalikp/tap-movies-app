const { Op } = require("sequelize");

const { Movie } = require('../models');

const getAllMovies = async (req, res) => {
    const { searchText } = req.query;

    try {
        const conditions = searchText ? {
            where: {
                moviename: {
                    [Op.iRegexp]: searchText
                }
            }
        }: {};
        const movies = await Movie.findAll(conditions);
        return res.json(movies);
    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const getMovie = async (req, res) => {
    const { movieId } = req.params;

    try {
        const movie = await Movie.findOne({
            where: {
                id: Number(movieId)
            }
        });
        if (!movie) throw new Error("Naa!! Movie Not Found");
        res.json({
            message: 'Yup!! Movie Found',
            movie
        });
    }
    catch (e) {
        res.status(404).json({
            message: e.message
        });
    }
}

const addMovie = async (req, res) => {
    const {id, moviename, actors, rating, year, language } = req.body;

    try {
        const createdMovie = await Movie.create({
            id,
            moviename,
            actors,
            rating,
            year,
            language
        });
        return res.json({
            message: 'Movie Created',
            movie: createdMovie
        })
    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}


module.exports = {
    getAllMovies,
    getMovie,
    addMovie
}