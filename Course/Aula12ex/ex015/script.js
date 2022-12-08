function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radsex')
    var foto = document.createElement('img')
    foto.setAttribute('id', 'foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 10) {
                foto.setAttribute('src', 'images/crianca-m.jpg')
            } else if (idade < 30) {
                foto.setAttribute('src', 'images/jovem-m.jpg')
            } else if (idade < 60) {
                foto.setAttribute('src', 'images/adulto-m.jpg')
            } else {
                foto.setAttribute('src', 'images/idoso-m.jpg')
            }
        } else {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                foto.setAttribute('src', 'images/crianca-f.jpg')
            } else if (idade < 30) {
                foto.setAttribute('src', 'images/jovem-f.jpg')
            } else if (idade < 60) {
                foto.setAttribute('src', 'images/adulto-f.jpg')
            } else {
                foto.setAttribute('src', 'images/idoso-f.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerText=`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(foto)
    }
}