require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');

const models = require('./models');
const apiRoutes = require("./routes");

const { PORT, PG_URI } = process.env;

const startServer = async () => {
  const app = express();

  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.send("Server is up and running!");
  });

  app.use("/api", apiRoutes);

  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use((err, req, res, next) => {
  
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}!`);
  });
}

try {
  startServer();
}
catch (error) {
  console.log("Oops!!! Bootstrap server failed!", error);
}

