const express = require('express');
const ws = require('ws');
const app = express();

app.use(express.static('./static'));
app.use(express.urlencoded({ extended: false }));

const sockets = [];

app.post("/publish", (req, res) => {
    const message = req.body.text;
    console.log("Received text to publish: ", message);
    sockets.forEach((socket) => socket.send(message));
    res.redirect("/redaktion.html");
})

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
    sockets.push(socket);
    console.log("New client connected. Number of clients: ", sockets.length);
});

const server = app.listen(8000);
server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, socket => {
        wsServer.emit('connection', socket, request);
    });
});
