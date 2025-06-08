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