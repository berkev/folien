const http = require('node:http');

const server = http.createServer((req, res) => {
    let requestBody = "";
    req.on('data', chunk => {
        requestBody += chunk;
    });
    req.on('end', () => {
        if (requestBody) {
            requestBody += "\n" + req.url;
            res.end(requestBody + "\n");
        } else {
            res.end(req.url + "\n");
        }
    });
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server beendet')
    })
});

const port = 8000;
server.listen(port);
console.log(`Server started on ${port}`);
