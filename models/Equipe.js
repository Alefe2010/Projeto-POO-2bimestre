class Equipe {
    #id;

    constructor(id, nome, disponivel = true) {
        this.#id = id;
        this.nome = nome;
        this.disponivel = disponivel;
    }

    ocupar() {
        this.disponivel = false;
    }

    liberar() {
        this.disponivel = true;
    }

    exibirInfo() {
        console.log({
            id: this.#id,
            nome: this.nome,
            disponivel: this.disponivel
        });
    }
}

module.exports = Equipe;