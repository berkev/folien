const app = require('express')();

let users = {}

app.get("/", (req, res) => {
    const userAgent = req.headers['user-agent'];
    users[userAgent] = users[userAgent] ? users[userAgent] += 1 : users[userAgent] = 1;
    res.write(`${users[userAgent]}`);
    res.write("\n" + JSON.stringify(users, undefined, "\t"));
    return res.end();
})

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
