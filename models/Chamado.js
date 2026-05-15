class Chamado {
    #id;

    constructor(
        id,
        descricao,
        categoria,
        localizacao,
        status = "Aberto"
    ) {
        this.#id = id;
        this.descricao = descricao;
        this.categoria = categoria;
        this.localizacao = localizacao;
        this.status = status;
    }

    atualizarStatus(novoStatus) {
        this.status = novoStatus;
    }

    exibirInfo() {
        console.log({
            id: this.#id,
            descricao: this.descricao,
            categoria: this.categoria,
            localizacao: this.localizacao,
            status: this.status
        });
    }
}

module.exports = Chamado;