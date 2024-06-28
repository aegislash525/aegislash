require('dotenv').config();

const dev = './database/' + process.env.DEV_DB_NAME;
const prod = './database/' + process.env.PROD_DB_NAME;

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: dev
        },
        migrations: {
            directory: './database/migrations'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'sqlite3',
        connection: {
            filename: prod
        },
        migrations: {
            directory: './database/migrations'
        },
        useNullAsDefault: true
    }
};
