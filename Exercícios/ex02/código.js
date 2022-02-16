function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Com todas as informações, computamos que a sua idade é ${idade}.`
    }if (idade > 1) {
        res.innerHTML = `Com todas as informações, computamos que a sua idade é ${idade} anos.`
    }else{
        res.innerHTML = `Com todas as informações, computamos que a sua idade é ${idade} ano.`
    }
}