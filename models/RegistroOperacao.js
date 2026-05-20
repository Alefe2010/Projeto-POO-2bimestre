class RegistroOperacao {
    constructor(descricao, usuario) {
        this.descricao = descricao;
        this.usuario = usuario;
        this.data = new Date();
    }

    mostrarRegistro() {
        console.log(
            `${this.usuario} realizou: ${this.descricao}`
        );
    }
}

module.exports = RegistroOperacao;