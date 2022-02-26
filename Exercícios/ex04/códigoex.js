function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var contagem = document.getElementById('resul')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        contagem.innerHTML = ('Impossível contar!!')
        //window.alert('ERRO')
    }else {
        contagem.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0 ){
            window.alert('Passo inválido, CONSIDERAR PASSO = 1')
            p = 1 
        }
        if(i < f){
            // contagem progressiva
            for(var c = i;c <=f;c += p) {
                contagem.innerHTML +=`${c} \u{1F449}`
            }
        }else {
            // contagem regressiva
            for(var c = i; c >= f; c -= p) {
                contagem.innerHTML += ` ${c} \u{1F449}`
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }
}