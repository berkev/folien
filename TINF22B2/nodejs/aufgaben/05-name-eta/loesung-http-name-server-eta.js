const express = require('express');
const app = express();

// Read form data form body
app.use(express.urlencoded({ extended: true }))

// Register template engine "eta"
const eta = require('eta');
app.engine('html', eta.renderFile)
app.set('views', './views')

app.get("/", (_req, res) => {
    return res.render("form.html", {name: ""})
})

app.post("/", (req, res)=>{
    return res.render("form.html", {name: req.body.name})
})

const port = 8080;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
