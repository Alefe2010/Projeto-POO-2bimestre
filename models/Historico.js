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
        console.log(
            this.eventos
        );
    }
}

module.exports = Historico;