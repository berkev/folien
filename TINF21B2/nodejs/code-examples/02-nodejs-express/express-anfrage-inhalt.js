const express = require('express');
const app = express();
const port = 8000;

// um automatisch String in JS-Objekt umzuwandeln
// application/json
//app.use(express.json());
// um automatisch Formulardaten in JS-Objekt umzuwandeln
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
