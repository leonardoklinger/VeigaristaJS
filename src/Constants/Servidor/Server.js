const { url } = require("../Url/Url")

const server = {
    br1: "https://br1" + url.urlPadrao,
    eun1: "https://eun1" + url.urlPadrao,
    euw1: "https://euw1" + url.urlPadrao,
    jp1: "https://jp1" + url.urlPadrao,
    kr: "https://kr" + url.urlPadrao,
    la1: "https://la1" + url.urlPadrao,
    la2: "https://la2" + url.urlPadrao,
    na1: "https://na1" + url.urlPadrao,
    oc1: "https://oc1" + url.urlPadrao,
    tr1: "https://tr1" + url.urlPadrao,
    ru: "https://ru" + url.urlPadrao
}

const servidores = {
    Brasil: "br1",
    EuropaNordica: "eun1",
    EuropaOcidental: "euw1",
    Japao: "jp1",
    Coreia: "kr",
    AmericaLatinaDoNorte: "la1",
    AmericaLatinaDoSul: "la2",
    AmericaDoNorte: "na1",
    Oceania: "oc1",
    Turquia: "tr1",
    Russia: "ru"
}

module.exports = {
    server,
    servidores
}