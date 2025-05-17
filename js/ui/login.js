import Storage from "../../database/storage.js";

document.getElementById("form-login").addEventListener("submit", (e) => {
    e.preventDefault();

    const idCliente = document.getElementById("idClienteLogin").value.trim();
    const mensaje = document.getElementById("mensaje-login");
    const cliente = Storage.buscarCliente(idCliente);

    if (!cliente) {
        mensaje.textContent = "❌ Error: el usuario no existe. Por favor, regístrate primero.";
        mensaje.style.color = "#ff5e62";
        return;
    }

    // Simulamos que el usuario inicia sesión correctamente.
    localStorage.setItem("clienteActual", JSON.stringify(cliente));
    window.location.href = "dashboard.html";
});