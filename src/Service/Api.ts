import axios from "axios"

async function Api(url: string) {
    try {
        const api = await axios.get(url)
        const { data } = api
        return data
    } catch (error) {
        if (error.response.status === 403) return console.warn("Chave da api informada está errada!")
        return error.response.data
    }
}

export {
    Api
}