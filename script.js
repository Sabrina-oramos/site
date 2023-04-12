
// Manipulação do DOM
var inputQtde = document.querySelector('#qtde')
inputQtde.addEventListener("change", atualizarOrcamento)
document.querySelector('#foleados').addEventListener("change", atualizarOrcamento)
document.querySelector('#estado_sim').addEventListener("change", atualizarOrcamento)
document.querySelector('#estado_nao').addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let qtde = inputQtde.value 
    let preco = qtde * 100
    
    let foleados = document.querySelector('#foleados').checked
    if(foleados) preco *= 1.2

    let estado = document.querySelector("#estado_nao").checked
    if(estado) preco *= 1 + (qtde * .1)

    let output = document.querySelector('#secao-frete form output')
    output.innerHTML = "R$ " + preco.toFixed(2)
    console.log(foleados)
}