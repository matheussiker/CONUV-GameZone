const filtros = document.querySelectorAll(".filtro");
const jogos = document.querySelectorAll(".card-catalogo");
const campoPesquisa = document.querySelector("#pesquisa-jogo");
const contadorJogos = document.querySelector("#contador-jogos");
const mensagemSemJogos = document.querySelector("#mensagem-sem-jogos");

let generoSelecionado = "todos";

function filtrarJogos() {
    const pesquisa = campoPesquisa.value.trim().toLowerCase();
    let quantidadeVisivel = 0;

    jogos.forEach(jogo => {
        const genero = jogo.dataset.genero;
        const nome = jogo.querySelector("h2").textContent.toLowerCase();

        const correspondeGenero =
            generoSelecionado === "todos" ||
            genero === generoSelecionado;

        const correspondePesquisa = nome.includes(pesquisa);

        if (correspondeGenero && correspondePesquisa) {
            jogo.hidden = false;
            quantidadeVisivel++;
        } else {
            jogo.hidden = true;
        }
    });

    contadorJogos.textContent =
        quantidadeVisivel === 1
            ? "1 jogo encontrado"
            : `${quantidadeVisivel} jogos encontrados`;

    mensagemSemJogos.hidden = quantidadeVisivel > 0;
}

filtros.forEach(filtro => {
    filtro.addEventListener("click", () => {
        generoSelecionado = filtro.dataset.genero;

        filtros.forEach(botao => {
            botao.classList.remove("ativo");
        });

        filtro.classList.add("ativo");

        filtrarJogos();
    });
});

campoPesquisa.addEventListener("input", filtrarJogos);

filtrarJogos();
