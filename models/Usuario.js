class Usuario {
    #id;

    constructor(id, nome, ativo = true) {
        this.#id = id;
        this.nome = nome;
        this.ativo = ativo;
    }

    get id() {
        return this.#id;
    }

    ativar() {
        this.ativo = true;
    }

    desativar() {
        this.ativo = false;
    }

    exibirInfo() {
        console.log({
            id: this.#id,
            nome: this.nome,
            ativo: this.ativo
        });
    }
}

module.exports = Usuario;