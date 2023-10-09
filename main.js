function valida(){
    document.body.style.background = 'black'
    let maior = document.getElementById('txtmaior')
    let menor = document.getElementById('txtmenor')
    var res = document.querySelector('div#res')
    let ma = Number(maior.value)
    let me = Number(menor.value)
    
    if(ma < me){
        alert(`Invalido, siga as instruções do placeholder`)
    }else{
        alert(`Formulário valido`)
        res.innerHTML = `O número B = ${ma} é maior que o segundo número A = ${me}`
        
    }
}