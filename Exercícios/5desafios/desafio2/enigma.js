function numAleatorio(max) {
    return Math.floor(Math.random() * 10);
}
function inserir() {
    var num1 = Number(document.getElementById = ('num1'))
    var resultado = (numAleatorio)
    var frase = document.getElementsByClassName('resulfinal')
    if (resultado == num1) {  
        frase.innerHTML = ('Parabéns vocÊ acertou!!!!!')
    }else {
        frase.innerHTML = ('Infelizmente não foi dessa vez, tente denovo')
    }
}
