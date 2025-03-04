// Función para cargar componentes dinámicamente
function includeHTML() {
    document.querySelectorAll("[data-include]").forEach(el => {
        let file = el.getAttribute("data-include");
        fetch(file)
            .then(response => response.text())
            .then(data => el.innerHTML = data);
    });
}

// Ejecutar la función cuando cargue la página
document.addEventListener("DOMContentLoaded", includeHTML);

// Función para actualizar automáticamente el breadcrumb
function updateBreadcrumb() {
    let currentPage = document.title;
    let breadcrumbCurrent = document.getElementById("breadcrumb-current");
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = currentPage;
    }
}

document.addEventListener("DOMContentLoaded", updateBreadcrumb);

// Solo ejecuta este código en index.html
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    console.log("Ejecutando scripts solo en index.html");
    
    // Aquí puedes agregar más código que solo quieres ejecutar en la página principal
}
if (document.title === "Inicio") {
    console.log("Ejecutando scripts solo en index.html");
    // Agrega más funciones aquí si solo las necesitas en la página principal
}
