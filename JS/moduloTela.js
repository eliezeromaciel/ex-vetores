function pegaDados (id1, id2){
    const texto = document.querySelector(id1).value
    const valorBusca = document.querySelector(id2).value
    const vetorValores = texto.split(",")
    return {vetorValores,valorBusca}
}

module.exports.pegaDados = pegaDados