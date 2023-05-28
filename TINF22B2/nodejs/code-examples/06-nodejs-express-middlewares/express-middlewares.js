const app = require('express')();

const myLogger = function (_req, _res, next) {
    console.log('LOGGED');
    next();
}

const requestTime = function (req, _res, next) {
    req.requestTime = Date.now();
    next();
}

app.use(myLogger);
app.use(requestTime);

app.get('/', (req, res) => {
    res.send("Request dated to: ", req.requestTime);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
