function carregar() {
    var corpo = window.document.getElementsByTagName("body")
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var bomdtn = window.document.getElementById("bomdtn")

    if (hora == 1) {
        msg.innerHTML = `Agora são ${hora} hora.`
    } else {
        msg.innerHTML =  `Agora são ${hora} horas.`
    }

    if (hora >= 0 && hora < 12) {
        //BD
        img.src = 'images/manha.jpg'
        bomdtn.innerHTML = "Bom dia!"
        document.body.style.background = 'rgb(146, 163, 193)'
    } else if (hora < 19) {
        //BT
        img.src = 'images/tarde.jpg'
        bomdtn.innerHTML = "Boa tarde!"
        document.body.style.background = 'rgb(243, 138, 47)'
    } else {
        //BN
        img.src = 'images/noite.jpg'
        bomdtn.innerHTML = "Boa noite!"
        document.body.style.background = 'rgb(34, 41, 51)'
    }
}