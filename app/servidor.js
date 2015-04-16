module.exports = function(atendentes) {

	return {
		join: function(atendente) {
			atendentes.add(atendente, this.id);
		},

		notificarDestinatario: function(data) {
			atendentes.notificar(this, data.organizacao_id, data.destinatario_id);
		}
	}
};