const path = require("node:path")
const Eta = require("eta").Eta;
const express = require('express');
const app = express();

// Read form data form body
app.use(express.urlencoded({ extended: true }))

// Initialize template engine "eta"
const eta = new Eta({ views: path.join(__dirname, "views") })

app.get("/", (_req, res) => {
    res.send(eta.render("form.html", { name: "" }));
})

app.post("/", (req, res) => {
    res.send(eta.render("form.html", { name: req.body.name }));
})

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
