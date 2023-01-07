const http = require('http');
const server = http.createServer((req, res) => {
    let response = "<!DOCTYPE html>";
    response += "<html><head>";
    response += "  <meta charset=\"UTF-8\">";
    response += "  <title>Hello World</title>";
    response += "</head><body>";
    response += "<h1>Hello World</h1>";
    response += "<p>Requested via " + req.method + "</p>";
    response += "<p>Request-URL: " + req.url + "</p>";
    response += "</body></html>";
    res.end(response, "utf8");
});
server.listen(8000);