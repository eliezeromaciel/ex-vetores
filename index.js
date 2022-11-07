function executa (){
    
    const dados = recebeDados()
    const ehvalido = analisaDados (dados)
    retornaMsg (ehvalido)
}


function recebeDados () {
    const email = document.querySelector("#input-email").value
    const senha = document.querySelector("#input-senha").value
    
    let retornoTotal = {email:email, senha:senha}
    return retornoTotal
}


function analisaDados (parametro){
    
    if (parametro.email !=="" && parametro.senha !==""){
        return true
    } else {
        alert ('email ou senha não digitados')
        return false
        }
}

function retornaMsg (parametro){
    
    
    
    if (parametro){
        // APARECERÁ A TAG DE SUCESSO
        document.querySelector("#retornoOk").style.display = "block"
        document.querySelector("#retornoFalso").style.display = "none"

        retornoOk.display.block
    } else {
        // APARECERÁ A TAG DE ERRO
        document.querySelector("#retornoOk").style.display = "none"
        document.querySelector("#retornoFalso").style.display = "block"
    }
}

    

