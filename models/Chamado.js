const Historico =
    require("./Historico");

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
        this.equipe = null;
        this.historico = new Historico();
        this.historico.adicionarEvento("Chamado criado");
    }

    atribuirEquipe(equipe) {
        this.equipe = equipe;

        this.historico.adicionarEvento
        (
            `Equipe ${equipe.nome} atribuída`
        );

    }

    atualizarStatus(novoStatus) {
        this.status = novoStatus;

        this.historico.adicionarEvento(
                `Status alterado para ${novoStatus}`
            );
    }

    exibirInfo() {

        console.log({
            descricao: this.descricao,
            categoria: this.categoria,
            localizacao: this.localizacao,
            status: this.status,
            equipe: this.equipe 
                ? this.equipe.nome 
                : "Nenhuma"
        });

    }
}

module.exports = Chamado;