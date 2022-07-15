import { Api } from "../Service/Api"
import { url, servidor, Ranked, Elo, Tier, Erros } from "../Constants"

class VeigaristaJS {
    private key: string

    constructor(key: string) {
        this.key = key
    }

    async procurarUserPorNome(nick: string, server: keyof typeof servidor, callback: (resultado: string) => void) {
        if (!nick) throw new Error(String(Erros.nick))
        callback(await Api(`${servidor[server]}${url.userUrlPorNome}${encodeURI(nick)}?api_key=${this.key}`))
    }

    async procurarUserPorContaId(contaId: string, server: keyof typeof servidor, callback: (resultado: string) => void) {
        if (!contaId) throw new Error(String(Erros.contaId))
        callback(await Api(`${servidor[server]}${url.userUrlPorContaId}${contaId}?api_key=${this.key}`))
    }

    async procurarUserPorPuuId(puuId: string, server: keyof typeof servidor, callback: (resultado: string) => void) {
        if (!puuId) throw new Error(String(Erros.puuId))
        callback(await Api(`${servidor[server]}${url.userUrlPorPuuId}${puuId}?api_key=${this.key}`))
    }

    async procurarUserPorId(id: string, server: keyof typeof servidor, callback: (resultado: string) => void) {
        if (!id) throw new Error(String(Erros.id))
        callback(await Api(`${servidor[server]}${url.userUrlPorId}${id}?api_key=${this.key}`))
    }

    async maestriaUser(id: string, server: keyof typeof servidor, callback: (resultado: string) => void) {
        if (!id) throw new Error(String(Erros.id))
        callback(await Api(`${servidor[server]}${url.userMaestria}${id}?api_key=${this.key}`))
    }

    async maestriaUserCampeaoEspecifico(id: string, idCampeao: number, server: keyof typeof servidor, callback: (resultado: string) => void) {
        if (!id) throw new Error(String(Erros.id))
        callback(await Api(`${servidor[server]}${url.userMaestria}${id}/by-champion/${idCampeao}?api_key=${this.key}`))
    }

    async campeaoRotacao(server: keyof typeof servidor, callback: (resultado: string) => void) {
        callback(await Api(`${servidor[server]}${url.campeaoRotacao}?api_key=${this.key}`))
    }

    async topPosicaoCadaElo(server: keyof typeof servidor, tipoRanked: keyof typeof Ranked, elo: keyof typeof Elo, tier: keyof typeof Tier, pagina: number = 1, callback: (resultado: string) => void) {
        callback(await Api(`${servidor[server]}${url.topPosicaoCadaElo}${Ranked[tipoRanked]}/${Elo[elo]}/${Tier[tier]}?page=${pagina}&api_key=${this.key}`))
    }

    async statusLol(server: keyof typeof servidor, callback: (resultado: string) => void) {
        callback(await Api(`${servidor[server]}${url.statusLol}?api_key=${this.key}`))
    }
}

export {
    VeigaristaJS
}