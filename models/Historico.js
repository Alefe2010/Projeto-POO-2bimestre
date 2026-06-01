class Historico {
    constructor() {
        this.eventos = [];
    }

    adicionarEvento(descricao) {
        this.eventos.push({
            descricao,
            data: new Date()
        });
    }

    mostrarHistorico() {
        if (this.eventos.length === 0) {
            console.log("Nenhum evento registrado.");
            return;
        }

        console.log(this.eventos);
    }
}

module.exports = Historico;