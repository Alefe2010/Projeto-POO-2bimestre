const ChamadoController = require('./controllers/ChamadoController')
const SistemaController = require('./controllers/SistemaController')
const Equipe = require('./models/Equipe')

function testarSistema(){
    let system = new SistemaController()

    console.log('\n======= USUÁRIOS =======\n')

    const user1 = system.cadastrarUsuario(1, 'alefe', true)
    const user2 = system.cadastrarUsuario(2, 'rodrigo', true)
    const user3 = system.cadastrarUsuario(5, 'Luiz', false)
    system.mostrarUsuarios()

    console.log('\n======= LOGS ==========\n')
    
    system.registrarOperacao('Apagar Incêndio', 'alefe')
    system.registrarOperacao('Vazamento', 'Luiz')
    system.mostrarLogs()
    

}
function testarChamado(){
    const chamados = new ChamadoController()
    const equipe1 = new Equipe(1, "Equipe de Bombeiros")
    const equipe2 = new Equipe(2, "Equipe Hidráulica")

    equipe1.exibirInfo()
    equipe2.exibirInfo()

    const chamado1 = chamados.abrirChamado('Incêndio em condomínio', 'Urgente', 'Condomínio das Flores')
    const chamado2 = chamados.abrirChamado('Vazamento de água', 'Normal', 'Rua das Graças')

    chamados.atribuirEquipe(chamado1, equipe1)
    chamados.atribuirEquipe(chamado2, equipe2)

    console.log('\n====== CHAMADOS EM ATENDIMENTO ========\n')
    chamados.listarChamados()
    chamados.finalizarChamado(chamado1)
    chamados.finalizarChamado(chamado2)
    
    console.log("\n======= HISTÓRICO DE CHAMADOS ==========\n")

    chamado1.historico.mostrarHistorico()
    chamado2.historico.mostrarHistorico()

    console.log("\n======== SITUAÇÃO FINAL ===========\n")
    chamados.listarChamados()

    console.log("\n======== EQUIPES ==========\n")
    equipe1.exibirInfo()
    equipe2.exibirInfo()
}

testarSistema()

testarChamado()
