const app = require('express')();
const port = 3000;

app.listen(
    port,
    () => console.log(`API started on port http://localhost:${PORT}/`)
);

app.get('/users', (req, res) => {
    res.status(200).send({
        message: "success",
        status: "200"
    });
});
