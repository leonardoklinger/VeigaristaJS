import { Api } from "../Service/Api"
import { servidor } from "../Constants/Servidor/Servidor"
import { url } from "../Constants/Url/Url"

class VeigaristaJS {
    private key: string

    constructor(key: string) {
        this.key = key
    }
    
    async procurarUserPorNome(nome: string, server: keyof typeof servidor): Promise<string> {
        return Api(`${servidor[server]}${url.userUrlPorNome}${encodeURI(nome)}?api_key=${this.key}`)
    }

    async procurarUserPorContaId(contaId: string, server: keyof typeof servidor): Promise<string> {
        return Api(`${servidor[server]}${url.userUrlPorContaId}${contaId}?api_key=${this.key}`)
    }
    
    async procurarUserPorPuuId(puuId: string, server: keyof typeof servidor): Promise<string> {
        return Api(`${servidor[server]}${url.userUrlPorPuuId}${puuId}?api_key=${this.key}`)
    }
    
    async procurarUserPorId(Id: string, server: keyof typeof servidor): Promise<string> {
        return Api(`${servidor[server]}${url.userUrlPorId}${Id}?api_key=${this.key}`)
    }
}

export {
    VeigaristaJS
}