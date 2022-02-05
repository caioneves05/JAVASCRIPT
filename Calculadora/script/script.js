function calcular(n1,n2) {
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    
    selector = document.getElementById("selector").value

    switch(selector){
        case '+':
            calculo = (n2+n2)
            document.getElementById("resultado").innerHTML = `O resultado da Soma de ${n1} + ${n2} é = ${calculo}`
            break
        case '-':
            calculo = (n1-n2)
            document.getElementById("resultado").innerHTML = `O resultado da Subtração de ${n1} - ${n2} é = ${calculo}`
            break
        case '*':
            calculo = (n1*n2)
            document.getElementById("resultado").innerHTML = `O resultado da Multiplicação de ${n1} * ${n2} é = ${calculo}`
            break
        case '/':
            calculo = Math.round((n1/n2))
            if(Number.isNaN(calculo)){
                document.getElementById("resultado").innerHTML = 'Insira um número divisível!'
            } else {
            document.getElementById("resultado").innerHTML = `O resultado da Divisão de ${n1} / ${n2} é = ${calculo}`
            break}
    }
}