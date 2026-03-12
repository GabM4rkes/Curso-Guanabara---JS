function clicar(){
    var txt1 = document.getElementById("n1")
    var n1 = Number(txt1.value)
    var tabuada = ''
    var res = document.getElementById("res")

    for (var c = 1; c<= 10; c++){
        tabuada += `${n1} x ${c} = ${n1 * c} <br> ` 
        res.innerHTML = (tabuada)
    }
}