const app = require("express")();
const eta = require("eta");
const port = 8000;

app.engine("eta", eta.renderFile);
app.set("views", "./views"); // folder

app.get("/", (_req, res) => {
    res.render("hello-world.eta", { name: "Eta" });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
