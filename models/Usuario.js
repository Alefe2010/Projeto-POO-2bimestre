class Usuario {
    constructor (id, nome, ativo = true){
        this.id = id;
        this.nome = nome;
        this.ativo = ativo;
    };

    ativar(){
        this.ativo = true;
    };

    desativar(){
        this.ativo = false;
    }

    exibirInfo(){
        console.log(
            `Usuário: ${this.nome} | Ativo: ${this.ativo}`
        )
    }
    
}

module.exports = Usuario;