// app.METHOD(PATH, HANDLER)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});
