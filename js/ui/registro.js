import Storage from "../database/storage.js";

document.getElementById("form-registro").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const idCliente = document.getElementById("idCliente").value.trim();

    if (!nombre || !idCliente) {
        document.getElementById("mensaje").textContent = "❌ Todos los campos son obligatorios.";
        return;
    }

    if (Storage.buscarCliente(idCliente)) {
        document.getElementById("mensaje").textContent = "⚠️ El ID ya está registrado.";
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

    document.getElementById("mensaje").textContent = "✅ Registro exitoso. Ahora puedes iniciar sesión.";
    document.getElementById("form-registro").reset();
});
