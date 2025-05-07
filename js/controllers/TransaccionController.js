import { Transaccion, PilaTransacciones } from "../models/Transaccion.js";
import VerificadorIntegridad from "../models/VerificadorIntegridad.js";
import SistemaPuntos from "../models/SistemaPuntos.js";

class TransaccionController {
  constructor(clienteController) {
    this.clienteController = clienteController;
    this.verificador = new VerificadorIntegridad();
    this.sistemaPuntos = new SistemaPuntos();
  }

  ejecutarTransaccion(idCliente, tipo, monto, idDestino = null) {
    const cliente = this.clienteController.obtenerCliente(idCliente);
    if (!cliente) return "Cliente no encontrado.";

    const transaccion = new Transaccion(Date.now(), tipo, monto);

    if (!this.verificador.verificarTransaccion(transaccion, cliente.saldo)) {
      return "Transacción inválida o saldo insuficiente.";
    }

    // Aplicar cambios según el tipo de transacción
    if (tipo === "Depósito") {
      cliente.depositar(monto);
    } else if (tipo === "Retiro") {
      cliente.retirar(monto);
    } else if (tipo === "Transferencia" && idDestino) {
      const destino = this.clienteController.obtenerCliente(idDestino);
      if (!destino) return "Cliente destino no encontrado.";
      cliente.transferir(monto, destino);
    } else {
      return "Tipo de transacción desconocido.";
    }

    // Calcular y agregar puntos
    const puntosGanados = this.sistemaPuntos.calcularPuntos(cliente, transaccion);
    return `Transacción ${tipo} completada. Se generaron ${puntosGanados} puntos.`;
  }
}

export default TransaccionController;
