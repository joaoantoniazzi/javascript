function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('id#txtano')
    var res = document.querySelector('id#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('tudo ok')
    }
}