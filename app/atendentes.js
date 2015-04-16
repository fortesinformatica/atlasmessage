module.exports = function() {
	var pool = {};

	return {
		add: function(atendente, socket) {
			if(!pool[atendente.organizacao_id]) {pool[atendente.organizacao_id] = {};}
      pool[atendente.organizacao_id][atendente.user_id] = socket;
		},

		notificar: function(organizacao_id, user_id) {
			var socket = pool[organizacao_id] && pool[organizacao_id][user_id];

			if (!socket) {return;}

			socket.emit('notificarnovamensagem');
		}
	};
};