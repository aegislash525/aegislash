const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();

const appRoutes = require('./api/routes/appRouter');
const userRoutes = require('./api/routes/userRouter');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173/');
    res.header('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        );
        return res.status(200).json({});
    }
    next();
});

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
