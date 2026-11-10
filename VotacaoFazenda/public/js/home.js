
async function carregarHome() {
    const participantes = await buscarParticipantes(true);

    const area = document.getElementById("roca-home");

    participantes.forEach(function(p) {
        area.innerHTML += `
            <a href="votacao.html" class="mini-roca">
                <img src="${p.foto}" alt="${p.nome}">
                ${p.nome}
            </a>
        `;
    });
}

carregarHome();