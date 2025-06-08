// Validação geral
document.getElementById("curriculoForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
        alert("✅ Dados confirmados com sucesso!");
    } else {
        this.reportValidity();
    }
});

// Clonar Formação
function adicionarFormacao() {
    const container = document.getElementById("formacoes-container");
    const clone = container.firstElementChild.cloneNode(true);
    container.appendChild(clone);
}

// Clonar Experiência
function adicionarExperiencia() {
    const container = document.getElementById("experiencias-container");
    const clone = container.firstElementChild.cloneNode(true);
    container.appendChild(clone);
}

// Clonar Idioma
function adicionarIdioma() {
    const container = document.getElementById("idiomas-container");
    const clone = container.firstElementChild.cloneNode(true);
    container.appendChild(clone);
}

const icon = document.querySelector(".icone");

icon.addEventListener("click", function () {
    icon.style.rotate = (icon.style.rotate === "90deg") ? "0deg" : "90deg";

})

const sidebar = document.getElementById("sidebar");

icon.addEventListener("click", () => {
    icon.classList.toggle("rotated");
    sidebar.classList.toggle("active");
});

document.addEventListener("click", function (event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnIcon = icon.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnIcon) {
        sidebar.classList.remove("active");
        icon.classList.remove("rotated");
    }
});
