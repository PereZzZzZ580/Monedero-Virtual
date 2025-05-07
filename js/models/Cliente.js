class ListaTransacciones {
    constructor() {
      this.transacciones = [];
    }
  
    agregar(transaccion) {
      this.transacciones.push(transaccion);
    }
  
    obtenerHistorial() {
      return this.transacciones;
    }
  }
  
  class Cliente {
    constructor(id, nombre) {
      this.id = id;
      this.nombre = nombre;
      this.saldo = 0;
      this.puntos = 0;
      this.rango = "Bronce";
      this.monederos = [];
      this.historialTransacciones = new ListaTransacciones();  // Lista propia
    }
  
    depositar(monto) {
      if (monto > 0) {
        this.saldo += monto;
        this.historialTransacciones.agregar({ tipo: "Depósito", monto });
        return `Depósito exitoso: ${monto}`;
      }
      return "Monto inválido.";
    }
  
    retirar(monto) {
      if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        this.historialTransacciones.agregar({ tipo: "Retiro", monto });
        return `Retiro exitoso: ${monto}`;
      }
      return "Saldo insuficiente o monto inválido.";
    }
  
    transferir(monto, destino) {
      if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        destino.saldo += monto;
        this.historialTransacciones.agregar({ tipo: "Transferencia", monto, destino: destino.nombre });
        destino.historialTransacciones.agregar({ tipo: "Recepción", monto, origen: this.nombre });
        return `Transferencia realizada a ${destino.nombre}: ${monto}`;
      }
      return "Saldo insuficiente o monto inválido.";
    }
  }
  
  export default Cliente;
  