// Función para cargar componentes HTML dinámicamente
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

// Función para actualizar el breadcrumb automáticamente
function updateBreadcrumb() {
    let currentPage = document.title;
    let breadcrumbElement = document.getElementById("breadcrumb-current");
    if (breadcrumbElement) {
        breadcrumbElement.textContent = currentPage;
    }
}

document.addEventListener("DOMContentLoaded", updateBreadcrumb);
