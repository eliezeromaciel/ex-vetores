import "./style.scss"

const moduloFilter = require("./JS/moduloFilter") 

const botaoFind =  
    document
        .querySelector("#button_find")
        .addEventListener('click', exercicioFind)

function exercicioFind (){
    const texto = document.querySelector("#find_lista").value
    const valorBusca = document.querySelector("#find_busca").value
    const vetorValores = texto.split(",")
   
    const resultado = vetorValores.find(element => element == valorBusca)
   
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
        .addEventListener('click', moduloFilter.exercicioFilter)
