require('dotenv').config();
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const address = process.env.ADDRESS || 'localhost';
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server started on http://${address}:${port}`);
});
