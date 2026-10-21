const catalogoFavoritos = [
    {
        id: "gta-vi",
        nome: "GTA VI",
        genero: "Ação e mundo aberto",
        descricao: "Explore Vice City com Jason e Lucia em uma aventura de mundo aberto repleta de crimes, ação e perigos.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/gta6.jpg"
    },
    {
        id: "valorant",
        nome: "VALORANT",
        genero: "Tiro tático",
        descricao: "Forme sua equipe, escolha um agente com habilidades únicas e dispute partidas táticas de tiro.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/valorant.jpg"
    },
    {
        id: "fortnite",
        nome: "FORTNITE",
        genero: "Battle Royale",
        descricao: "Caia na ilha, encontre equipamentos, enfrente outros jogadores e lute para ser o último sobrevivente.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/fortinite.jpg"
    },
    {
        id: "forza-horizon-6",
        nome: "FORZA HORIZON 6",
        genero: "Corrida",
        descricao: "Explore cenários impressionantes, dirija carros incríveis e participe de corridas e desafios automobilísticos.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/forzaHorizon6.jpg"
    },   
    {
        id: "minecraft",
        nome: "MINECRAFT",
        genero: "Aventura e construção",
        descricao: "Explore mundos, construa casas e sobreviva usando sua criatividade.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/minecraft.jfif"
    },
    {
        id: "red-dead-2",
        nome: "RED DEAD REDEMPTION 2",
        genero: "Ação e mundo aberto",
        descricao: "Viva uma aventura no Velho Oeste com Arthur Morgan.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/redDeadRedemption7.jfif"
    },
    {
        id: "cyberpunk-2077",
        nome: "CYBERPUNK 2077",
        genero: "RPG e ação",
        descricao: "Explore Night City em uma aventura futurista.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/cyberpunk2077.jfif"
    },
    {
        id: "elden-ring",
        nome: "ELDEN RING",
        genero: "RPG e aventura",
        descricao: "Explore um mundo de fantasia e enfrente inimigos desafiadores.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/ELDENRING.jfif"
    },
    {
        id: "ea-sports-fc",
        nome: "EA SPORTS FC",
        genero: "Esportes e futebol",
        descricao: "Monte seu time e dispute partidas de futebol.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/EA+SPORTSFC.jfif"
    },
    {
        id: "call-of-duty",
        nome: "CALL OF DUTY",
        genero: "Tiro e ação",
        descricao: "Participe de combates intensos em partidas de tiro.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/callofdutyblackops7.jfif"
    },
    {
        id: "rocket-league",
        nome: "ROCKET LEAGUE",
        genero: "Carros e futebol",
        descricao: "Controle carros turbinados e marque gols.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/ROCKETLEAGUE.jfif"
    },
    {
        id: "fall-guys",
        nome: "FALL GUYS",
        genero: "Party game",
        descricao: "Supere obstáculos e tente vencer os outros jogadores.",
        imagem: "https://s3-gamezone-bucket-378040395811-us-east-2-an.s3.us-east-2.amazonaws.com/images/fallguys.jfif"
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
            </div>
        `;


        listaFavoritos.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", renderizarFavoritos);


document.addEventListener("favoritosAtualizados", renderizarFavoritos);
