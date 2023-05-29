const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static("./static"))

// Register template engine "eta"
const eta = require('eta');
app.engine('html', eta.renderFile)
app.set('views', './views')

app.get("/", (_req, res) => {
    return res.render("calc.html", {
        result: "",
        operand1: "",
        operand2: "",
        operator: ""

    })
})

app.post("/", (req, res) => {
    let o1 = parseInt(req.body.operand1)
    let o2 = parseInt(req.body.operand2)

    // Easter Egg
    if (o1 === 42 || o2 === 42) {
        return res.redirect("/42")
    }

    let operator = req.body.operator
    let result = false
    if (operator == "+") result = o1 + o2
    if (operator == "-") result = o1 - o2
    if (operator == "*") result = o1 * o2
    if (operator == "/") result = o1 / o2
    if (result == false) return res.redirect("/error")


    return res.render("calc.html", {
        result: result,
        operand1: o1,
        operand2: o2,
        operator: operator
    })
})

app.get("/error", (_req, res) => {
    res.render("error.html")
})

app.get("/42", (_req, res) => {
    res.render("42.html")
})

const port = 8080;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
