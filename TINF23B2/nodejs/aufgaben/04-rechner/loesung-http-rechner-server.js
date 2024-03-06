const express = require('express');
const app = express();

// Read form data form body
app.use(express.urlencoded({ extended: true }))

app.get("/", (_req, res)=>{
    res.type('html'); // text/html
    let response = "<!DOCTYPE html>";
    response += '<html lang="de"><head>';
    response += "  <meta charset=\"UTF-8\">";
    response += "  <title>Lösung Aufgabe 4 - Rechner</title>";
    response += "</head><body>";
    response += '<form action="/" method="post">';
    response += '  <input type="number" name="operand1" id="operand1" placeholder="25">';
    response += '  <input type="text" name="operator" id="operator" placeholder="*">';
    response += '  <input type="number" name="operand2" id="operand2" placeholder="150">';
    response += '  <input type="submit" value="=">';
    response += "</form>";
    response += "</body></html>";
    res.send(response);
    res.end()
})

app.post("/", (req, res)=>{
    let o1 = parseInt(req.body.operand1)
    let o2 = parseInt(req.body.operand2)
    let operator = req.body.operator
    let result = false
    if (operator == "+") result = o1 + o2
    if (operator == "-") result = o1 - o2
    if (operator == "*") result = o1 * o2
    if (operator == "/") result = o1 / o2
    res.type('html'); // text/html
    let response = "<!DOCTYPE html>";
    response += '<html lang="de"><head>';
    response += "  <meta charset=\"UTF-8\">";
    response += "  <title>Lösung Aufgabe 4 - Rechner</title>";
    response += "</head><body>";
    response += '<form action="/" method="post">';
    response += '  <input type="number" name="operand1" id="operand1" placeholder="25">';
    response += '  <input type="text" name="operator" id="operator" placeholder="*">';
    response += '  <input type="number" name="operand2" id="operand2" placeholder="150">';
    response += '  <input type="submit" value="=">';
    response += "</form>";
    if (result) {
        response += "<b>" + result + "</b>";
    } else {
        response += "<b>Supported operators: '+', '-', '*', '/'</b>";
    }
    response += "</body></html>";
    res.send(response);
    res.end()
})


const port = 8080;
app.listen(port);
console.log(`Server started on ${port}`);
