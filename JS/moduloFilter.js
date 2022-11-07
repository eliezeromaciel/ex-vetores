function executa (dados){
    const resultado = dados.vetorValores.filter(element => element == dados.valorBusca)
    

    // console.log(`resultado do filtro encontrou ${resultado.length} itens`)
    // console.log(` o array completo é ${resultado}`)

    if (resultado==0) { 
        document.querySelector("#filter__retorno_ok").style.display = "none"
        document.querySelector("#filter__retorno_false").style.display = "block"
    } else {
        document.querySelector("#filter__retorno_ok").style.display = "block"
        document.querySelector("#filter__retorno_false").style.display = "none"
        document.querySelector("#filter__retorno_ok").innerHTML = `Encontrados ${resultado.length} itens`
    }
}

module.exports.executa = executa
