class CuentaBancaria{
    #saldoInicial;

    constructor(titular, saldoInicial){
        this.titular = titular;
        
        if(saldoInicial < 0) {
            console.log("El saldo no puede ser negativo.");
        }

        this.#saldoInicial = saldoInicial;
    }
    
    get getSaldo() {
        return this.#saldoInicial;
    }

    set setSaldo(valor) {
        if(valor < 0) {
            console.log("El saldo no puede ser negativo.");
        } else {
            this.#saldoInicial = valor;
        }
    }
}

const cuenta1 = new CuentaBancaria("Juan Pérez", 1000);
console.log(cuenta1.getSaldo);
cuenta1.setSaldo = 1500;
console.log(cuenta1.getSaldo);
cuenta1.setSaldo = -500;
console.log(cuenta1.getSaldo);