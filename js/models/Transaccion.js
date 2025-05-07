class PilaTransacciones {
    constructor() {
      this.transacciones = [];
    }
  
    agregar(transaccion) {
      this.transacciones.push(transaccion);
    }
  
    deshacer() {
      return this.transacciones.pop() || null;
    }
  }
  
  class Transaccion {
    constructor(id, tipo, monto) {
      this.id = id;
      this.tipo = tipo; // "Depósito", "Retiro", "Transferencia"
      this.monto = monto;
    }
  }
  
  export { Transaccion, PilaTransacciones };
  