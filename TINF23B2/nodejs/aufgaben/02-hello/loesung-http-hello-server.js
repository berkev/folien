const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const currentTime = new Date();
    res.type('html'); // text/html
    let response = "<!DOCTYPE html>";
    response += "<html><head>";
    response += "  <meta charset=\"UTF-8\">";
    response += "  <title>Hello Get Server</title>";
    response += "</head><body>";
    response += "<h1>Hello Get Server</h1>";
    response += "<p>Requested via " + req.method + "</p>";
    response += "<p>Request-URL: " + req.url + "</p>";
    response += "<p>Current Time: " + currentTime.toLocaleTimeString() + "</p>";
    response += "</body></html>";
    res.send(response);
})

app.use(express.text())
app.post("/", (req, res)=>{
    const currentTime = new Date();
    res.type('html'); // text/html
    let response = "<!DOCTYPE html>";
    response += "<html><head>";
    response += "  <meta charset=\"UTF-8\">";
    response += "  <title>Hello Post Server</title>";
    response += "</head><body>";
    response += "<h1>Hello Post Server</h1>";
    response += "<p>Requested via " + req.method + "</p>";
    response += "<p>Request-URL: " + req.url + "</p>";
    response += "<p>Request-Body: " + req.body + "</p>";
    response += "<p>Current Time: " + currentTime.toLocaleTimeString() + "</p>";
    response += "</body></html>";
    res.send(response);
    res.end()
})

const port = 8080;
app.listen(port);
console.log(`Server started on ${port}`);
