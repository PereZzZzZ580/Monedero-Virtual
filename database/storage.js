class Storage {
  static cargarDatos() {
    const data = localStorage.getItem("clientes");
    return data ? JSON.parse(data) : [];
  }

  static guardarDatos(clientes) {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }

  static buscarCliente(id) {
    const clientes = this.cargarDatos();
    return clientes.find(cliente => cliente.id === id) || null;
  }

  static agregarCliente(cliente) {
    const clientes = this.cargarDatos();
    clientes.push(cliente);
    this.guardarDatos(clientes);
  }

  static actualizarSaldo(id, nuevoSaldo) {
    const clientes = this.cargarDatos();
    const cliente = clientes.find(cliente => cliente.id === id);
    if (cliente) {
      cliente.saldo = nuevoSaldo;
      this.guardarDatos(clientes);
    }
  }

  static agregarTransaccion(idCliente, transaccion) {
    const clientes = this.cargarDatos();
    const cliente = clientes.find(cliente => cliente.id === idCliente);
    if (cliente) {
      if (!cliente.historialTransacciones) cliente.historialTransacciones = [];
      cliente.historialTransacciones.push(transaccion);
      this.guardarDatos(clientes);
      return "Transacción guardada exitosamente.";
    }
    return "Cliente no encontrado.";
  }

  static actualizarPuntos(idCliente, nuevosPuntos, nuevoRango) {
    const clientes = this.cargarDatos();
    const cliente = clientes.find(cliente => cliente.id === idCliente);
    if (cliente) {
      cliente.puntos = nuevosPuntos;
      cliente.rango = nuevoRango;
      this.guardarDatos(clientes);
    }
  }
}

export default Storage;