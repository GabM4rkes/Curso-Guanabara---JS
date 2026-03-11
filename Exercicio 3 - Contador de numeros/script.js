function botao(){
    var txt1 = document.getElementById("n1")
    var txt2 = document.getElementById("n2")
    var txt3 = document.getElementById("n3")

    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)
    var n3 = Number(txt3.value)

    var resultado = document.getElementById("resultado")

    for (n1; n1 <= n2; n1 += n3){
        resultado.innerHTML += ` ${n1}`
}
}