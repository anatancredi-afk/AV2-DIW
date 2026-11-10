
const API = "http://localhost:3000";

// aqui eu busco os participantes
async function buscarParticipantes(naRoca) {
    const resposta = await fetch(`${API}/participantes?naRoca=${naRoca}`);
    return await resposta.json();
}

// buscando os votos
async function buscarVotos() {
    const resposta = await fetch(`${API}/votos`);
    return await resposta.json();
}

// registra o voto
async function registrarVoto(id) {
    const resposta = await fetch(`${API}/votos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            participanteId: id,
            data: new Date().toISOString()
        })
    });

    if (!resposta.ok) {
        throw new Error("Erro ao registrar voto");
    }
}

// apaga um voto
async function apagarVoto(id) {
    const resposta = await fetch(`${API}/votos/${id}`, {
        method: "DELETE"
    });

    if (!resposta.ok) {
        throw new Error("Erro ao apagar voto");
    }
}
