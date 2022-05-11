const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.type('html'); // text/html
    let response = "<!DOCTYPE html>";
    response += "<html><head>";
    response += "  <meta charset=\"UTF-8\">";
    response += "  <title>Hello World</title>";
    response += "</head><body>";
    response += "<h1>Hello World</h1>";
    response += "<p>Requested via " + req.method + "</p>";
    response += "<p>Request-URL: " + req.url + "</p>";
    response += "</body></html>";
    res.end(response);
});
const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
