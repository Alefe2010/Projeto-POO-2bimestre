const Chamado = require("../models/Chamado"); 
class ChamadoController {
    constructor() {
        this.chamados = []; 
        this.contadorId = 1; 
    }

    abrirChamado(descricao, categoria, localizacao) {
        const novoChamado = new Chamado(
            this.contadorId++,
            descricao,
            categoria,
            localizacao
        );

        this.chamados.push(novoChamado);
        return novoChamado;
    }

    atribuirEquipe(chamado, equipe) {
        if (!chamado || !equipe || !equipe.disponivel) {
            console.log("Não foi possível atribuir a equipe. Verifique os dados ou a disponibilidade.");
            return;
        }

        chamado.atribuirEquipe(equipe);
        equipe.ocupar();
        chamado.atualizarStatus("Em Andamento");
    }


    finalizarChamado(chamado) {
        if (!chamado || chamado.status === "Concluído") {
            return;
        }

        chamado.atualizarStatus("Concluído");

        if (chamado.equipe) {
            chamado.equipe.liberar(); 
        }
    }


    listarChamados() {
        if (this.chamados.length === 0) {
            console.log("Nenhum chamado registrado.");
            return;
        }
        this.chamados.forEach(chamado => chamado.exibirInfo());
    }
}

module.exports = ChamadoController;