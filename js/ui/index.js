document.addEventListener("DOMContentLoaded", () => {
    const clienteActual = localStorage.getItem("clienteActual");

    if (clienteActual) {
        // Si el usuario ya inició sesión, enviarlo directamente al dashboard
        window.location.href = "pages/dashboard.html";
    }
});
