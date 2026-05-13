class Drone {
    #id
    static arrayDeDrones = []
    constructor(id, capacidadeDeCarga, status, disp){
        this.#id = id
        this.capacidadeDeCarga = capacidadeDeCarga
        this.status = status
        this.disp = disp
    }
    cadastrar(){
        const novoDrone = {
            id: this.#id,
            capacidade: this.capacidadeDeCarga,
            status: this.status,
            disp: this.disp
        }
        Drone.arrayDeDrones.push(novoDrone)
        return `O drone ${'#' + this.#id} foi cadastrado com sucesso.`
    }
}

class Pedido {
    
}
/**let d1 = new Drone(5, 25, "Ativo", "Disponível");

console.log(d1.cadastrar());
console.log(Drone.arrayDeDrones);*/
