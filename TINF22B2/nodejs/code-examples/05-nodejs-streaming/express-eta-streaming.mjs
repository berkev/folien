import * as eta from "eta";
import express from "express";
const app = express();
const port = 8080;
app.use(express.static("static"));

const etaConfig = { views: "parts" }

const start = await eta.renderFile("1_start.eta", etaConfig);
const head = await eta.renderFile("2_head.eta", etaConfig);
const bodyOne = await eta.renderFile("3_body-part-one.eta",
    { name: "Christoph" }, etaConfig);
const bodyTwo = await eta.renderFile("4_body-part-two.eta", etaConfig);
const end = await eta.renderFile("5_end.eta", etaConfig);

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
