const app = require('express')();
const PORT = 3000;

app.listen(
    PORT,
    () => console.log(`API started on port http://localhost:${PORT}/`)
);

app.get('/', (req, res) => {
    res.status(200).send({
        message: "success",
        status: "200"
    });
});
