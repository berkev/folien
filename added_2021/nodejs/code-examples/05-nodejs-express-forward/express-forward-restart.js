const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    req.url = "/user";
    app(req, res);
});

app.get('/user', (_req, res) => {
    res.send('Hello from user!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
