
async function carregarResultado() {
    const participantes = await buscarParticipantes(true);
    const votos = await buscarVotos();
    const total = votos.length;
    const placar = document.getElementById("placar");

    document.getElementById("total-votos").textContent = total;
    placar.innerHTML = "";

    // verificação
    if (total === 0) {
        placar.innerHTML = `
            <p class="text-center">Nenhum voto registrado ainda.</p>
        `;
        return;
    }

    // percentual
    participantes.forEach(function(p) {
        p.quantidade = votos.filter(v => v.participanteId == p.id).length;
        p.percentual = (p.quantidade / total) * 100;
    });

    // ordenação
    participantes.sort((a, b) => b.quantidade - a.quantidade);

    // mostra os resultados
    participantes.forEach(function(p, indice) {
        placar.innerHTML += `
            <div class="resultado-item">
                <div class="d-flex align-items-center gap-3">
                    <img src="${p.foto}" class="rounded">

                    <div class="flex-grow-1">
                        <strong>${p.nome}</strong>

                        ${indice === 0
                            ? '<span class="badge bg-danger">Sairia hoje</span>'
                            : ''}

                        <div class="progress my-2">
                            <div class="progress-bar"
                                style="width: ${p.percentual}%">
                            </div>
                        </div>

                        <small>
                            ${p.percentual.toFixed(1)}%
                            (${p.quantidade} votos)
                        </small>
                    </div>
                </div>
            </div>
        `;
    });
}

carregarResultado();
