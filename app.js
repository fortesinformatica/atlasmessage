var app = require('http').createServer(),
    io = require('socket.io')(app);

app.listen(9997, function() {
	console.log("Server configured for: " + (global.process.env.NODE_ENV || 'development') + " environment.");
	console.log("Server running on :9997");
  console.log(new Date)
});

var atendentes = require(__dirname + '/app/atendentes')();
var servidor = require(__dirname + '/app/servidor')(atendentes);

io.on('connection', function (socket) {
  socket.on('join', servidor.join);
  socket.on('notificardestinatario', servidor.notificarDestinatario);
});

io.of('/notificacoesdelogin').on('connection', function(socket) {
  socket.on('notificarlogin', function(userId) {
    socket.broadcast.emit('novologin' + userId);
  });
});