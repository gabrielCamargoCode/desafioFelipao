class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    assar(){
        console.log("Bolo assado de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("Massa de Chocolate", "Recheio de Nutella")
let boloPremium = new formaDeBolo("Baunilha", "Coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()
//console.log(boloFesta)