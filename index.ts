import { VeigaristaJS } from "./src"

const veigar = new VeigaristaJS("Sua-Key-Vem-Aqui")

veigar.procurarUserPorNome("Mateus verme", "br1", (resposta) =>{
    console.log(resposta)
})

veigar.procurarUserPorContaId("qKQ8JPbLprrzwtzYpVGcQ4SoyUkO7BcrW2D6BTASfjxPUrpyPiVsE2eF", "br1", (resposta) => {
    console.log(resposta)
})

veigar.procurarUserPorPuuId("tnqaSTx5y_ujguwF9znP1XLixeCZgw4xirIZH2cOoYVkYylYg4Z19FRIJROAL0Xi0fUc7BmHUBKTRg", "br1", (resposta) => {
    console.log(resposta)
})

veigar.procurarUserPorId("BwmWNvYLcQFpRoU_OCyj8BrPqMlelhmM9uumCWFZu57lCks1", "br1", (resposta) => {
    console.log(resposta)
})

veigar.maestriaUser("BwmWNvYLcQFpRoU_OCyj8BrPqMlelhmM9uumCWFZu57lCks", "br1", (resposta) => {
    console.log(resposta)
})

veigar.maestriaUserCampeaoEspecifico("BwmWNvYLcQFpRoU_OCyj8BrPqMlelhmM9uumCWFZu57lCks", 45, "br1", (resposta) => {
    console.log(resposta)
})

veigar.campeaoRotacao("br1", (resposta) => {
    console.log(resposta)
})

veigar.topPosicaoCadaElo("br1", "soloDuo", "Desafiante", "I", 1, (resposta) => {
    console.log(resposta)
})

veigar.statusLol("br1", (resposta) => {
    console.log(resposta)
})