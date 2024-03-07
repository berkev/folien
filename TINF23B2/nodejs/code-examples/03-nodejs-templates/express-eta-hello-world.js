const path = require("node:path")
const Eta = require("eta").Eta;
const app = require("express")();
const port = 8000;

const eta = new Eta({ views: path.join(__dirname, "views") })

app.get("/", (_req, res) => {
    res.send(eta.render("hello-world", { name: "Eta" }));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
