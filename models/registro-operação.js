class Operacao {
    constructor(descricao, usuario, data){
        this.descricao = descricao
        this.usuario = usuario
        this.data = data
    }
    registraOp(){
        let operacao = {
            descricao: this.descricao,
            usuario: this.usuario,
            data: this.data
        }
        return `${this.usuario} participou do(a) ${this.descricao}, em ${this.data}`
    }
}

let o1 = new Operacao('Incendio em loja', 'Alefe', '22-05-2026')
console.log(o1.registraOp())
