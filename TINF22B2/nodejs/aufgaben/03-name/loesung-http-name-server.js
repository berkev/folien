const express = require('express');
const app = express();

// Read form data form body
app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res)=>{
    res.type('html'); // text/html
    let response = "<!DOCTYPE html>";
    response += '<html lang="de"><head>';
    response += "  <meta charset=\"UTF-8\">";
    response += "  <title>Lösung Aufgabe 3 - Name</title>";
    response += "</head><body>";
    response += "<p>Hallo " + req.body.name + "</p>";
    response += '<form action="http://localhost:8080/" method="post">';
    response += '  <input type="text" name="name" id="name" placeholder="Dein Name?">';
    response += '  <input type="submit" value="Abschicken">';
    response += "</form>";
    response += "</body></html>";
    res.send(response);
    res.end()
})

const port = 8080;
app.listen(port);
console.log(`Server started on ${port}`);
