const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

// Read form data form body
app.use(express.urlencoded({ extended: true }))
// Read cookies
app.use(cookieParser())

// Register template engine "eta"
const eta = require('eta');
app.engine('html', eta.renderFile)
app.set('views', './views')

const history = {};

app.get("/login", (_req, res) => {
    return res.render("login.html");
});

app.post("/login", (req, res) => {
    const { username } = req.body;
    // Pseudo Input Validation
    if (username.length > 0 && username !== " ") {
        res.cookie("username", username, { httpOnly: true });
        return res.redirect("/");
    }
    return res.redirect("/login");
});

app.get("/", (req, res) => {
    return res.render("calc.html", {
        result: "",
        operand1: "",
        operand2: "",
        operator: "",
        history: history[req.cookies.username] || []
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
            operator: operator,
            history: history[req.cookies.username] || []
        })
    }

    // Initialize array for user
    history[req.cookies.username] = history[req.cookies.username] || []
    console.log(history[req.cookies.username]);
    // Insert into the front
    history[req.cookies.username].splice(0, 0, `${o1} ${operator} ${o2} = ${result}`);
    // Limit to five
    history[req.cookies.username].splice(5);

    return res.render("calc.html", {
        result: result,
        operand1: o1,
        operand2: o2,
        operator: operator,
        history: history[req.cookies.username]
    })
})

const port = 8080;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
