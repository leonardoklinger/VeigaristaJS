const Elo = {
    Ferro: { conteudo: "IRON", key: "Ferro" },
    Bronze: { conteudo: "BRONZE", key: "Bronze" },
    Prata: { conteudo: "SILVER", key: "Prata" },
    Ouro: { conteudo: "GOLD", key: "Ouro" },
    Platina: { conteudo: "PLATINUM", key: "Platina" },
    Diamante: { conteudo: "DIAMOND", key: "Diamante" },
    Mestre: { conteudo: "MASTER", key: "Mestre" },
    Grao_Mestre: { conteudo: "GRANDMASTER", key: "Grao_Mestre" },
    Desafiante: { conteudo: "CHALLENGER", key: "Desafiante" }
}

const EloTraducao = {
    IRON: "Ferro",
    BRONZE: "Bronze",
    SILVER: "Prata",
    GOLD: "Ouro",
    PLATINUM: "Platina",
    DIAMOND: "Diamante",
    MASTER: "Mestre",
    GRANDMASTER: "Grão_Mestre",
    CHALLENGER: "Desafiante"
}

module.exports = {
    Elo,
    EloTraducao
}