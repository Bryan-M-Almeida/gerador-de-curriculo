const dados = JSON.parse(localStorage.getItem("curriculoCompleto"));
if (!dados) {
    alert("Nenhum dado encontrado!");
    throw new Error("Sem dados");
}

// Preenche campos
document.querySelector("#nome").innerText = dados.nome;
document.querySelector("#idade").innerText = dados.idade;
document.querySelector("#email").innerText = dados.email;
document.querySelector("#celular").innerText = dados.celular;
document.querySelector("#objetivo").innerText = dados.objetivo;

// Formação
const formacoes = document.querySelector("#formacoes");
dados.formacao.curso.forEach((curso, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <p><strong>Curso:</strong> ${curso}</p>
    <p><strong>Instituição:</strong> ${dados.formacao.instituicao[i]}</p>
    <p><strong>Conclusão:</strong> ${dados.formacao.anoDeConclusao[i]}</p>
  `;
    formacoes.appendChild(div);
});

// Experiência
const exp = document.querySelector("#experiencias");
dados.experiencia.empresa.forEach((empresa, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <p><strong>Empresa:</strong> ${empresa}</p>
    <p><strong>Cargo:</strong> ${dados.experiencia.cargo[i]}</p>
    <p><strong>Período:</strong> ${dados.experiencia.periodo[i]}</p>
    <p><strong>Atividades:</strong> ${dados.experiencia.atividades[i]}</p>
  `;
    exp.appendChild(div);
});

// Habilidades & Idiomas
document.querySelector("#habilidades").innerText = dados.habilidades;
const idiomas = document.querySelector("#idiomas");
dados.idiomas.forEach(({ idioma, nivel }) => {
    const p = document.createElement("p");
    p.innerText = `${idioma} – ${nivel}`;
    idiomas.appendChild(p);
});

// Links
document.querySelector("#linkedin").href = dados.links.linkedin;
document.querySelector("#github").href = dados.links.github;
document.querySelector("#portfolio").href = dados.links.portfolio;

// Geração de PDF
document.getElementById("gerarPdf").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const el = document.getElementById("curriculo");
    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });

    pdf.html(el, {
        x: 0,
        y: 0,
        html2canvas: {
            scale: 1,
            useCORS: true,
            backgroundColor: "#fff"
        },
        autoPaging: "text",
        callback: pdf => pdf.save("curriculo.pdf")
    });
});
