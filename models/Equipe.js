class Equipe {
    constructor (id, nome, ativo = true){
        this.id = id;
        this.nome = nome;
        this.disponivel = ativo;
    };

    ocupar(){
        this.disponivel = false;
    };

    liberar(){
        this.disponivel = true;
    }

    exibirInfo(){
        console.log(
            `Usuário: ${this.nome} | Equipe: ${this.ativo}`
        )
    }
    
}

module.exports = Equipe;