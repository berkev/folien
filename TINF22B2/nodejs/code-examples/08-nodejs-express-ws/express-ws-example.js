const ws = require('ws');
const app = require('express')();

const wsSrv = new ws.Server({ noServer: true });
wsSrv.on('connection', (socket) => {
  socket.on('message', message => console.log(message));
  socket.send("Message from the server");
});

const server = app.listen(8000);
server.on('upgrade', (request, socket, head) => {
  wsSrv.handleUpgrade(request, socket, head, (socket) => {
    wsSrv.emit('connection', socket, request);
  });
});
