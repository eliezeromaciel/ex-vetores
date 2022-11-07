import "./style.scss"

const moduloTela = require("./JS/moduloTela")
const moduloFilter = require("./JS/moduloFilter") 



const botaoFind =  
    document
        .querySelector("#button_find")
        .addEventListener('click', exercicioFind)


function exercicioFind (){
    const dados = moduloTela.pegaDados("#find_lista", "#find_busca")
   
    const resultado = dados.vetorValores.find(element => element == dados.valorBusca)
   
    if (resultado) {
        document.querySelector("#retorno_ok").style.display = "block"
        document.querySelector("#retorno_false").style.display = "none"
    } else {
        document.querySelector("#retorno_ok").style.display = "none"
        document.querySelector("#retorno_false").style.display = "block"
    }
}


const botaoFilter =  
    document
        .querySelector("#button_filter")
        .addEventListener('click', exercicioFilter)


function exercicioFilter (){
    const dados = moduloTela.pegaDados("#filter_lista", "#filter_busca")
    const executa = moduloFilter.executa(dados)
}