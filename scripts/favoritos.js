const catalogoFavoritos = [
    {
        id: "gta-vi",
        nome: "GTA VI",
        genero: "Ação e mundo aberto",
        descricao: "Explore Vice City com Jason e Lucia em uma aventura de mundo aberto repleta de crimes, ação e perigos.",
        imagem: "https://viciados.net/wp-content/uploads/2025/11/GTA-VI-Grand-Theft-Auto-6-Rockstar-Games-Jason-Lucia-Wallpaper-2026-797x448.webp"
    },
    {
        id: "valorant",
        nome: "VALORANT",
        genero: "Tiro tático",
        descricao: "Forme sua equipe, escolha um agente com habilidades únicas e dispute partidas táticas de tiro.",
        imagem: "https://m.media-amazon.com/images/M/MV5BZmQwMjQ2ZTUtZmM5MC00MTdkLWIxYzgtODU1NzQ4Zjg4NmMxXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: "fortnite",
        nome: "FORTNITE",
        genero: "Battle Royale",
        descricao: "Caia na ilha, encontre equipamentos, enfrente outros jogadores e lute para ser o último sobrevivente.",
        imagem: "https://m.media-amazon.com/images/M/MV5BOWJlODRkMDMtYjAxNy00NDEzLTk1MTctZmUyMjc2OTM0N2EwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "forza-horizon-6",
        nome: "FORZA HORIZON 6",
        genero: "Corrida",
        descricao: "Explore cenários impressionantes, dirija carros incríveis e participe de corridas e desafios automobilísticos.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tabDHJ6jqEUUNy_Fo7VwoREbiiMvBc53QCFkuirrHg&s=10"
    }
];


const listaFavoritos = document.querySelector("#lista-favoritos");
const mensagemVazia = document.querySelector("#mensagem-vazia");


function renderizarFavoritos() {
    const favoritosSalvos = obterFavoritos();


    const jogosFavoritos = catalogoFavoritos.filter(jogo =>
        favoritosSalvos.includes(jogo.id)
    );


    listaFavoritos.innerHTML = "";


    if (jogosFavoritos.length === 0) {
        mensagemVazia.hidden = false;
        return;
    }


    mensagemVazia.hidden = true;


    jogosFavoritos.forEach(jogo => {
        const card = document.createElement("article");
        card.classList.add("favorito-card");


        card.innerHTML = `
            <img src="${jogo.imagem}" alt="${jogo.nome}">


            <div class="conteudo-favorito">
                <span class="genero-favorito">${jogo.genero}</span>
                <h3>${jogo.nome}</h3>
                <p>${jogo.descricao}</p>


                <button
                    class="btn-favorito favoritado"
                    type="button"
                    data-jogo="${jogo.id}">
                    Remover dos favoritos
                </button>
            </div>
        `;


        listaFavoritos.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", renderizarFavoritos);


document.addEventListener("favoritosAtualizados", renderizarFavoritos);
