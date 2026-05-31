const Usuario = require('../models/Usuario');
const RegistroOperacao = require('../models/RegistroOperacao');

class SistemaController {
    constructor() {
        this.usuarios = [];
        this.logs = [];
    }

    cadastrarUsuario(id, nome, ativo) {
        const novoUsuario = new Usuario(id, nome, ativo);
        this.usuarios.push(novoUsuario);
        this.registrarOperacao(`Cadastrou o usuário ${nome} id: ${id}`, "Sistema");
        return novoUsuario;
    }

    registrarOperacao(descricao, usuario) {
        const novoLog = new RegistroOperacao(descricao, usuario);
        this.logs.push(novoLog);
        return novoLog;
    }

    mostrarLogs() {
        this.logs.forEach(log => log.mostrarRegistro());
    }

    mostrarUsuarios() {
        this.usuarios.forEach(usuario => usuario.exibirInfo());
    }
}

module.exports = SistemaController;