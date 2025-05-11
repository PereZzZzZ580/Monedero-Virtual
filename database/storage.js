import fs from "fs";

const archivoDatos = "database/data.json";

class Storage {
  static cargarDatos() {
    try {
      const data = fs.readFileSync(archivoDatos, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      return { clientes: [] }; // Si el archivo no existe, devuelve una estructura vacía
    }
  }

  static guardarDatos(datos) {
    try {
      fs.writeFileSync(archivoDatos, JSON.stringify(datos, null, 2));
      console.log("✅ Datos guardados correctamente.");
    } catch (error) {
      console.error("❌ Error al guardar los datos:", error);
    }
  }

  static buscarCliente(id) {
    const datos = this.cargarDatos();
    return datos.clientes.find(cliente => cliente.id === id) || null;
  }

  static actualizarSaldo(id, nuevoSaldo) {
    const datos = this.cargarDatos();
    const cliente = datos.clientes.find(cliente => cliente.id === id);
    if (cliente) {
      cliente.saldo = nuevoSaldo;
      this.guardarDatos(datos);
    }
  }

  static agregarTransaccion(idCliente, transaccion) {
    const datos = this.cargarDatos();
    const cliente = datos.clientes.find(cliente => cliente.id === idCliente);
    if (cliente) {
      cliente.historialTransacciones.push(transaccion);
      this.guardarDatos(datos);
      return "Transacción guardada exitosamente.";
    }
    return "Cliente no encontrado.";
  }

  static actualizarPuntos(idCliente, nuevosPuntos, nuevoRango) {
    const datos = this.cargarDatos();
    const cliente = datos.clientes.find(cliente => cliente.id === idCliente);
    if (cliente) {
      cliente.puntos = nuevosPuntos;
      cliente.rango = nuevoRango;
      this.guardarDatos(datos);
    }
  }
}

export default Storage;
