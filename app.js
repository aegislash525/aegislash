const morgan = require('morgan');
const express = require('express');
const app = express();

const appRoutes = require('./api/routes/app');
const userRoutes = require('./api/routes/users');

app.use(morgan('dev'));

app.use('/', appRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    let errorStatus = error.status || 500;
    res.status(errorStatus);
    res.json({
        status: errorStatus,
        message: error.message
    });
});

module.exports = app;
