const express = require('express');
const app = express();

// Read form data form body
app.use(express.urlencoded({ extended: true }))

// Register template engine "eta"
const eta = require('eta');
app.engine('html', eta.renderFile)
app.set('views', './views')

const history = [];

app.get("/", (_req, res) => {
    return res.render("calc.html", {
        result: "",
        operand1: "",
        operand2: "",
        operator: "",
        history: history

    })
})

app.post("/", (req, res) => {
    let o1 = parseInt(req.body.operand1)
    let o2 = parseInt(req.body.operand2)
    let operator = req.body.operator
    let result = false
    if (operator == "+") result = o1 + o2
    if (operator == "-") result = o1 - o2
    if (operator == "*") result = o1 * o2
    if (operator == "/") result = o1 / o2
    if (result == false) {
        return res.render("calc.html", {
            result: "Supported operators: '+', '-', '*', '/'",
            operand1: o1,
            operand2: o2,
            operator: operator
        })
    }

    // Insert into the front
    history.splice(0, 0, `${o1} ${operator} ${o2} = ${result}`);
    // Limit to five
    history.splice(5);

    return res.render("calc.html", {
        result: result,
        operand1: o1,
        operand2: o2,
        operator: operator,
        history: history
    })
})

const port = 8080;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
