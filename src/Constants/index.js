const { server, servidores } = require("./Servidor/Server")
const { url } = require("./Url/Url")
const { erros } = require("./Erros/Erros")
const { Elo, EloTraducao, Ranked, RankedTraducao, Tier } = require("./Rank")

module.exports = {
    server,
    servidores,
    url,
    erros,
    Elo,
    EloTraducao,
    Ranked,
    RankedTraducao,
    Tier,
}