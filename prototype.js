function CuentaBancaria(titular, saldoInicial) {
    this.titular = titular;
    this.saldoInicial = saldoInicial;
}

const cuentaBancariaPrototype = {
    depositar(monto){
        this.saldoInicial += monto;
        console.log("Depósito realizado. Nuevo saldo: " + this.saldoInicial);
    },
    extraer(monto) {
        if(monto > this.saldoInicial) {
            console.log("Fondos insuficientes");
        } else {
            this.saldoInicial -= monto;
            console.log("Extracción realizada. Nuevo saldo: " + this.saldoInicial);
        }
    },
    consultarSaldo() {
        console.log("Saldo actual: " + this.saldoInicial);
    }
};

Object.assign(CuentaBancaria.prototype, cuentaBancariaPrototype);

const cuenta1 = new CuentaBancaria("Juan Pérez", 1000);
cuenta1.consultarSaldo();
cuenta1.depositar(500);
cuenta1.extraer(200);
cuenta1.extraer(2000);