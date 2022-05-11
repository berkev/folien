const express = require('express');
const app = express();

app.get('/', (_req, res) => {
    res.type('json'); // application/json
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
