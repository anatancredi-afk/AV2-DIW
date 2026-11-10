
let quantidadeVotosUsuario = 0;

async function carregarVotacao() {
    const naRoca = await buscarParticipantes(true);
    const demais = await buscarParticipantes(false);

    const areaRoca = document.getElementById("roca");
    const areaDemais = document.getElementById("demais");

    naRoca.forEach(function(p) {
        areaRoca.innerHTML += `
            <div class="col">
                <div class="card card-peao card-roca h-100">

                    <span class="badge bg-danger selo-roca">
                        Na roça
                    </span>

                    <img
                        src="${p.foto}"
                        class="card-img-top"
                        alt="${p.nome}"
                    >

                    <div class="card-body text-center">
                        <h3>${p.nome}</h3>

                        <button
                            class="btn btn-danger w-100"
                            onclick="votar(${p.id}, '${p.nome}')"
                        >
                            Votar para eliminar
                        </button>
                    </div>

                </div>
            </div>
        `;
    });

    demais.forEach(function(p) {
        areaDemais.innerHTML += `
            <div class="col">
                <div class="card card-peao card-pequeno h-100">

                    <img
                        src="${p.foto}"
                        class="card-img-top"
                        alt="${p.nome}"
                    >

                    <div class="card-body text-center">
                        <p class="card-title">${p.nome}</p>
                    </div>

                </div>
            </div>
        `;
    });
}

async function votar(id, nome) {
    try {
        await registrarVoto(id);

        quantidadeVotosUsuario++;

        document.getElementById("mensagem-voto").innerHTML = `
            <div class="alert alert-success">

                Voto registrado para eliminar
                <strong>${nome}</strong>.

                Você já votou
                ${quantidadeVotosUsuario} vez(es).

                <a href="resultado.html" class="float-end">
                    Ver resultado
                </a>

            </div>
        `;

    } catch (erro) {
        alert("Erro ao registrar voto. Confira o JSON Server.");
    }
}

carregarVotacao();
