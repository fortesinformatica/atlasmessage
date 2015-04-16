module.exports = function(atendentes) {

	return {
		join: function(atendente) {
			atendentes.add(atendente, this);
		},

		notificarDestinatario: function(data) {
			atendentes.notificar(data.organizacao_id, data.destinatario_id);
		} 
	}
};