module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './profiles.sqlite3'
        },
        useNullAsDefault: true
    }
};
