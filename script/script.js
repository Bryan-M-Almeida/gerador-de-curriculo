document.getElementById("curriculoForm").addEventListener("submit", function (e) {
    e.preventDefault(); // impede o refresh da página

    const data = {
        nome: document.querySelector("input[name=nome]").value,
        idade: document.querySelector("input[name=idade]").value + " anos",
        email: document.querySelector("input[name=email]").value,
        celular: document.querySelector("input[name=celular]").value,
        objetivo: document.querySelector("textarea[name=objetivo]").value,
        formacao: {
            curso: [],
            instituicao: [],
            anoDeConclusao: []
        },
        experiencia: {
            empresa: [],
            cargo: [],
            periodo: [],
            atividades: []
        },
        habilidades: document.querySelector("input[name=habilidades]").value,
        idiomas: [],
        links: {
            linkedin: document.querySelector("input[name=linkedin]").value,
            github: document.querySelector("input[name=github]").value,
            portfolio: document.querySelector("input[name=portfolio]").value,
            instagram: "" // você não colocou input de Instagram
        }
    };

    // FORMACOES
    document.querySelectorAll("#formacoes-container .formacao").forEach(formacao => {
        const inputs = formacao.querySelectorAll("input");
        data.formacao.curso.push(inputs[0].value);
        data.formacao.instituicao.push(inputs[1].value);
        data.formacao.anoDeConclusao.push(inputs[2].value);
    });

    // EXPERIÊNCIAS
    document.querySelectorAll("#experiencias-container .experiencia").forEach(experiencia => {
        const inputs = experiencia.querySelectorAll("input");
        const atividades = experiencia.querySelector("textarea");

        data.experiencia.empresa.push(inputs[0].value);
        data.experiencia.cargo.push(inputs[1].value);
        data.experiencia.periodo.push(inputs[2].value);
        data.experiencia.atividades.push(atividades.value);
    });

    // IDIOMAS
    document.querySelectorAll("#idiomas-container .idioma").forEach(idiomaDiv => {
        const idioma = idiomaDiv.querySelector("input").value;
        const nivel = idiomaDiv.querySelector("select").value;
        data.idiomas.push({ idioma, nivel });
    });

    console.log("Currículo gerado:", data);
    alert("Dados confirmados! Veja no console (F12)");

    localStorage.setItem("curriculoCompleto", JSON.stringify(data));
    window.location.href = "curriculo.html"; // redireciona pra página do currículo

});

