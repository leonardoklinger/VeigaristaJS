const axios = require("axios")
const { erros } = require("../Constants/index.js")

function Api(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((resp) => {
            resolve(resp.data)
        }).catch((error) => {
            reject(erros[error.response.status])
        })
    })
}

module.exports = {
    Api
}