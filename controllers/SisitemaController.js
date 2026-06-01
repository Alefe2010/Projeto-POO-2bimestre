const Usuario =
    require("../models/Usuario");

const RegistroOperacao =
    require("../models/RegistroOperacao");

class SistemaController {
    constructor() {
        this.usuarios = [];
        this.logs = [];
    }

    cadastrarUsuario(
        id,
        nome,
        ativo
    ) {
        const novoUsuario =
            new Usuario(
                id,
                nome,
                ativo
            );

        this.usuarios.push(
            novoUsuario
        );

        this.registrarOperacao(
            `Cadastrou o usuário ${nome} (ID: ${id})`,
            "Sistema"
        );

        return novoUsuario;
    }

    registrarOperacao(
        descricao,
        usuario
    ) {
        const novoLog =
            new RegistroOperacao(
                descricao,
                usuario
            );

        this.logs.push(
            novoLog
        );

        return novoLog;
    }

    mostrarLogs() {
        if (this.logs.length === 0) {
            console.log(
                "Nenhum log registrado."
            );
            return;
        }

        this.logs.forEach(
            log => log.mostrarRegistro()
        );
    }

    mostrarUsuarios() {
        if (this.usuarios.length === 0) {
            console.log(
                "Nenhum usuário cadastrado."
            );
            return;
        }

        this.usuarios.forEach(
            usuario => usuario.exibirInfo()
        );
    }
}

module.exports =
    SistemaController;