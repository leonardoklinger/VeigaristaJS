const { Api } = require("../Service/Api.js")
const { server, url, erros, Elo, EloTraducao, Ranked, RankedTraducao, Tier } = require("../Constants")


class VeigaristaJS {
    #api_key
    #api_key2
    constructor(key) {
        this.#api_key = `?api_key=${key}`
        this.#api_key2 = `&api_key=${key}`
    }

    procurarUsuarioPeloNome(nick, servidor) {
        if (!nick) throw new Error(erros.nick)
        if (!server[servidor]) throw new Error(erros.server)

        return new Promise(async (resolve, reject) => {
            try {
                const { id, accountId, puuid, name, profileIconId, summonerLevel } = await Api(`${server[servidor]}${url.userUrlPeloNome}${encodeURI(nick)}${this.#api_key}`)
                const versaoLol = await this.versaoLol()
                const linkIconePerfil = `http://ddragon.leagueoflegends.com/cdn/${versaoLol[0]}/img/profileicon/${profileIconId}.png`
                const elo = await this.procurarEloUser(id, servidor)
                let resultadoRankead = []

                Object.keys(elo).map(key => {
                    resultadoRankead.push({
                        [RankedTraducao[elo[key].queueType]]: {
                            tipoRankeada: RankedTraducao[elo[key].queueType],
                            elo: EloTraducao[elo[key].tier],
                            rank: elo[key].rank,
                            pontos: elo[key].leaguePoints,
                            vitorias: elo[key].wins,
                            derrotas: elo[key].losses,
                            winRate: (elo[key].wins / (elo[key].wins + elo[key].losses) * 100).toFixed(1) + "%"
                        }
                    })
                })


                const resultadoObjeto = {
                    id: id,
                    contaId: accountId,
                    puuid: puuid,
                    nome: name,
                    iconePerfil: linkIconePerfil,
                    level: summonerLevel,
                    elo: resultadoRankead
                }

                resolve(resultadoObjeto)
            } catch (error) {
                reject(error)
            }
        })
    }

    procurarUsuarioPelaContaId(contaId, servidor) {
        if (!contaId) throw new Error(erros.contaId)
        if (!server[servidor]) throw new Error(erros.server)

        return new Promise((resolve, reject) => {
            try {
                resolve(Api(`${server[servidor]}${url.userUrlPelaContaId}${contaId}${this.#api_key}`))
            } catch (error) {
                reject(error)
            }
        })
    }

    procurarUserPeloPuuId(puuId, servidor) {
        if (!puuId) throw new Error(erros.puuId)
        if (!server[servidor]) throw new Error(erros.server)

        return new Promise((resolve, reject) => {
            try {
                resolve(Api(`${server[servidor]}${url.userUrlPeloPuuId}${puuId}${this.#api_key}`))
            } catch (error) {
                reject(error)
            }
        })
    }

    procurarUserPeloId(Id, servidor) {
        if (!Id) throw new Error(erros.id)
        if (!server[servidor]) throw new Error(erros.server)

        return new Promise((resolve, reject) => {
            try {
                resolve(Api(`${server[servidor]}${url.userUrlPeloId}${Id}${this.#api_key}`))
            } catch (error) {
                reject(error)
            }
        })
    }

    procurarEloUser(Id, servidor) {
        if (!Id) throw new Error(erros.id)
        if (!server[servidor]) throw new Error(erros.server)

        return new Promise((resolve, reject) => {
            try {
                resolve(Api(`${server[servidor]}${url.userElo}${Id}${this.#api_key}`))
            } catch (error) {
                reject(error)
            }
        })
    }

    async maEstriaUser(Id, servidor, limit = 1) {
        if (!Id) throw new Error(erros.id)
        if (!server[servidor]) throw new Error(erros.server)
        if (limit <= 0) throw new Error(erros[406].mensagem + " Error:" + erros[406].status)

        const versaoLol = await this.versaoLol()
        const maEstria = await Api(`${server[servidor]}${url.userMaestria}${Id}${this.#api_key}`)
        const { data } = await Api(`http://ddragon.leagueoflegends.com/cdn/${versaoLol[0]}/data/pt_BR/champion.json`)
        const champeaoInfo = []
        const nomeCampeoesMaEstria = []

        maEstria.map((element, index) => {
            if (limit === "tudo") {
                return resultadoMaEstria(element)
            } else {
                if (limit - 1 >= index) {
                    return resultadoMaEstria(element)
                }
            }
        })

        champeaoInfo.forEach(element => nomeCampeoesMaEstria.push(Object.values(data).find(campeao => campeao.key === String(element.id)).name))

        function resultadoMaEstria(element) {
            return champeaoInfo.push({
                url: `https://cdn.communitydragon.org/latest/champion/${element.championId}/square.png`,
                id: element.championId,
                levelCampeao: element.championLevel,
                pontosCampeao: element.championPoints,
                ganhouBau: element.tokensEarned,
                championPointsSinceLastLevel: element.championPointsSinceLastLevel,
                championPointsUntilNextLevel: element.championPointsUntilNextLevel,
            })
        }

        function resultadoArrumado() {
            let resultado = []
            nomeCampeoesMaEstria.forEach((element, index) => {
                resultado.push(Object.assign({ nomeCampeao: element }, champeaoInfo[index]))
            })
            return resultado
        }

        return new Promise((resolve, reject) => {
            try {
                resolve(resultadoArrumado())
            } catch (error) {
                reject(error)
            }
        })
    }

    maEstriaUserCampeaoEspecifico(Id, idCampeao, servidor) {
        if (!Id) throw new Error(erros.id)
        if (!server[servidor]) throw new Error(erros.server)

        return new Promise((resolve, reject) => {
            try {
                resolve(Api(`${server[servidor]}${url.userMaestria}${Id}/by-champion/${idCampeao}${this.#api_key}`))
            } catch (error) {
                reject(error)
            }
        })
    }

    campeaoEmRotacao(servidor) {
        if (!server[servidor]) throw new Error(erros.server)

        return new Promise((resolve, reject) => {
            try {
                resolve(Api(`${server[servidor]}${url.campeaoEmRotacao}${this.#api_key}`))
            } catch (error) {
                reject(error)
            }
        })
    }

    topPosicoesDeCadaElo(servidor, tipoRanked, elo, tier, pagina) {
        if (!server[servidor]) throw new Error(erros.server)
        if (!Ranked[tipoRanked.key]) throw new Error(erros.ranked)
        if (!Elo[elo.key]) throw new Error(erros.elo)
        if (!Tier[tier.key]) throw new Error(erros.tier)

        return new Promise((resolve, reject) => {
            try {
                resolve(Api(`${server[servidor]}${url.topPosicoesDeCadaElo}${Ranked[tipoRanked.key].conteudo}/${Elo[elo.key].conteudo}/${Tier[tier.key].conteudo}/?page=${pagina}${this.#api_key2}`))
            } catch (error) {
                reject(error)
            }
        })
    }

    statusLol(servidor) {
        if (!server[servidor]) throw new Error(erros.server)

        return new Promise((resolve, reject) => {
            try {
                resolve(Api(`${server[servidor]}${url.statusLol}${this.#api_key}`))
            } catch (error) {
                reject(error)
            }
        })
    }

    versaoLol() {
        return new Promise((resolve, reject) => {
            try {
                resolve(Api("https://ddragon.leagueoflegends.com/api/versions.json"))
            } catch (error) {
                reject(error)
            }
        })
    }
}

module.exports = {
    VeigaristaJS
}