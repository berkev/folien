const path = require("node:path")
const Eta = require("eta").Eta;
const express = require("express");
const app = express();
const port = 8000;
app.use(express.static("static"));

const eta = new Eta({ views: path.join(__dirname, "parts") })

const start = eta.render("1_start.eta");
const head = eta.render("2_head.eta");
const bodyOne = eta.render("3_body-part-one.eta", { name: "Christoph" });
const bodyTwo = eta.render("4_body-part-two.eta");
const end = eta.render("5_end.eta");

app.get("/", (_req, res) => {
    setTimeout(() => res.write(start), 2000);
    setTimeout(() => res.write(head), 3000);
    setTimeout(() => res.write(bodyOne), 5000);
    setTimeout(() => res.write(bodyTwo), 10000);
    setTimeout(() => res.end(end), 10010);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
