import { VeigaristaJS } from "./src"

const veigar = new VeigaristaJS("Sua-Chave-da-API")

async function name() {
    console.log(await veigar.procurarUserPorNome("Mateus verme", "br1"))
}

name()