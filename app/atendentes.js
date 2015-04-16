module.exports = function() {
	var redisClient = require('redis').createClient();

	redisClient.on("error", function (err) {
    console.log("[REDIS] Error " + err);
  });

	return {
		add: function(atendente, socket_id) {
			redisClient.hmset(atendente.organizacao_id, atendente.user_id, socket_id);
		},

		notificar: function(socket, organizacao_id, user_id) {
			redisClient.hgetall(organizacao_id, function(err, data) {
				var socket_id = data && data[user_id];

				if (socket_id) {
					socket.broadcast.to(socket_id).emit('notificarnovamensagem');
				}
			});
		}
	};
};