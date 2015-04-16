var app = require('http').createServer(),
    io = require('socket.io')(app);

app.listen(9997, function() {
	console.log("port :9997");
});

var atendentes = require(__dirname + '/app/atendentes')();
var servidor = require(__dirname + '/app/servidor')(atendentes);

io.on('connection', function (socket) {
  socket.on('join', servidor.join);
  socket.on('notificardestinatario', servidor.notificarDestinatario);
});