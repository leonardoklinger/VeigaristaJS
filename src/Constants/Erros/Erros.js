const erros = {
    400: {mensagem: "Usuário não encontrado !", status: 400},
    401: {mensagem: "Não autorizado, por favor verifique a chave da api !", status: 401},
    403: {mensagem: "Chave da api informada está errada !", status: 403},
    404: {mensagem: "Desculpa, nada foi encotrado !", status: 404},
    406: {mensagem: "Desculpa, o tamanho da sua busca tem que ser maior que 0!", status: 406},
    415: {mensagem: "Mídia não suportada !", status: 415},
    429: {mensagem: "Limite de taxa execedida", status: 429},
    500: {mensagem: "Erro interno com a RiotGames", status: 500},
    503: {mensagem: "Serviço indisponível", status: 503},
    "nick": "Informe um nick, por favor",
    "contaId": "Informe um id de uma conta, por favor",
    "puuId": "Informe um puuId, por favor",
    "id": "Informe um id de um usuário, por favor",
    "server": "Informe um servidor válido, por favor",
    "ranked": "Informe uma ranked válido, por favor",
    "elo": "Informe um elo válido, por favor",
    "tier": "Informe um tier válido, por favor",
}

module.exports = {
    erros
}