import Storage from "../../database/storage.js";

document.getElementById("form-registro").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const idCliente = document.getElementById("idCliente").value.trim();
    const mensaje = document.getElementById("mensaje-registro");

    if (!nombre || !idCliente) {
        mensaje.textContent = "❌ Todos los campos son obligatorios.";
        return;
    }

    if (Storage.buscarCliente(idCliente)) {
        mensaje.textContent = "⚠️ El ID ya está registrado.";
        return;
    }

    const nuevoCliente = {
        id: idCliente,
        nombre: nombre,
        saldo: 0,
        puntos: 0,
        rango: "Bronce",
        monederos: [],
        historialTransacciones: []
    };

    Storage.agregarCliente(nuevoCliente);

    mensaje.textContent = "✅ Registro exitoso. Ahora puedes iniciar sesión.";
    document.getElementById("form-registro").reset();
});