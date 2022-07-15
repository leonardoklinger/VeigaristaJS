import axios from "axios"
import { Erros } from "../Constants/index"

async function Api(url: string) {
    try {
        const api = await axios.get(url)
        const { data } = api
        return data
    } catch (error) {
        return Erros[error.response.status as keyof typeof Erros]
    }
}

export {
    Api
}