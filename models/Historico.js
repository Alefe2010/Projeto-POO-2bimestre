class Historico {
    constructor(){
        this.eventos = [];
    }

    adicionarEvento(descricao){
        let data = new Date();

        this.eventos.push({
            descricao,
            data
        });
    }

    mostrarHistorico(){
        console.log(this.eventos)
    }
}

module.exports = Historico;