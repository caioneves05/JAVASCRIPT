function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resul = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('verifique os dados e tente novamente')
    }else {
        var idade = ano - Number(fano.value)
        resul.innerHTML = `Você tem ${fano.value} Anos e nasceu no ano de ${idade}.`
    }
}