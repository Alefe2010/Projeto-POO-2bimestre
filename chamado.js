class Chamado {
    #id
    static registroDeChamados = []
    constructor(id, descricao){
        this.#id = id
        this.descricao = descricao
    }
    // metodo abrirChamado dando mais informações sobre o chamado.
    abrirChamado(categoria, localizacao, status){
        this.categoria = categoria
        this.localizacao = localizacao
        this.status = status
        // cria um objeto para adicionar no array
        let novoChamado = {
            id: this.#id,
            descricao: this.descricao,
            categoria: this.categoria,
            localizacao: this.localizacao,
            status: this.status
        }
        Chamado.registroDeChamados.push(novoChamado)
        console.log(Chamado.registroDeChamados)
    }
}

let c1 = new Chamado(25, "Incendio em condominio")
c1.abrirChamado("Incendio", "Rua Santo Amaro", "Médio")