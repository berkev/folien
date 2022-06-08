const express = require('express');
const app = express();
const port = 8000;

const handleRoot = (req, res) => {
    handleUser(req, res);
};

app.get('/', handleRoot);

const handleUser = (_req, res) => {
    res.send('Hello from user!');
};

app.get('/user', handleUser);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
