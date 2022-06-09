const cookieParser = require('cookie-parser');
const app = require('express')();

app.use(cookieParser());

app.get('/', function (req, _res) {
    console.log(req.cookies); // { sessionId: 'test' }
});
