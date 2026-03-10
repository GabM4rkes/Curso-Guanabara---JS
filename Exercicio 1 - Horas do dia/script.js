 function carregar(){
    var mensagem = document.getElementById = msg
    var img = document.getElementById = imagem
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
     if (hora >= 6 && hora <= 12 ) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#f1c690'
    } else if (hora >= 13 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#e2573ebb'
    }else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#000000d7'
    }
    }