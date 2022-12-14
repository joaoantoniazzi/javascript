function iniciar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var j = ''

    if (inicio.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        window.alert("[ERRO] Revise os dados e tente novamente!")
    } else {
        for (i=Number(inicio.value); i<=Number(fim.value); i=i+Number(passo.value)) {
            j = j+String(i)+'👉'
        }
        res.innerText=j+'🏁'
    }
}