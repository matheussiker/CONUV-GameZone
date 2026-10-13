const CHAVE_FAVORITOS = "gamezone-favoritos";

function obterFavoritos() {
    return JSON.parse(localStorage.getItem(CHAVE_FAVORITOS)) || [];
}

function salvarFavoritos(favoritos) {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
}

function atualizarBotoesFavoritos() {
    const favoritos = obterFavoritos();

    document.querySelectorAll("[data-jogo].btn-favorito, [data-jogo].btn-favorito-painel").forEach(botao => {
        const jogo = botao.dataset.jogo;
        const favoritado = favoritos.includes(jogo);

        if (favoritado) {
            botao.textContent = "♥ Favoritado";
        } else {
            botao.textContent = "♡ Favoritar";
        }
        botao.classList.toggle("favoritado", favoritado);
    });
}

document.addEventListener("click", event => {
    const botao = event.target.closest(".btn-favorito, .btn-favorito-painel");

    if (!botao) return;

    const jogo = botao.dataset.jogo;

    let favoritos = obterFavoritos();

    if (favoritos.includes(jogo)) {
        favoritos = favoritos.filter(id =>{
            id !== jogo
        });
    } else {
        favoritos.push(jogo);
    }

    salvarFavoritos(favoritos);
    atualizarBotoesFavoritos();
});

document.addEventListener("DOMContentLoaded", atualizarBotoesFavoritos);