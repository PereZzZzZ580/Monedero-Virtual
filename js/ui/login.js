import Storage from "../database/storage.js";

document.getElementById("form-login").addEventListener("submit", (e) => {
    e.preventDefault();

    const idCliente = document.getElementById("idClienteLogin").value.trim();
    const cliente = Storage.buscarCliente(idCliente);

    if (!cliente) {
        document.getElementById("mensaje-login").textContent = "❌ ID no encontrado. Regístrate primero.";
        return;
    }

    // Simulamos que el usuario inicia sesión correctamente.
    localStorage.setItem("clienteActual", JSON.stringify(cliente));
    window.location.href = "dashboard.html";
});
