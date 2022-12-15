var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')
var j = ''

function iniciar() {
    if (inicio.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        res.innerText = 'Impossível contar!'
        window.alert("[ERRO] Revise os dados e tente novamente!")
    } else {
        contar()
        res.innerText=j+'🏁'
        j = ''
    }
}

function contar() {
    if (Number(passo.value)==0) {
        window.alert('Passo impossível. Considerando PASSO = 1')
        passo.value = 1
    }
    if (Number(passo.value)<0) {
        for (i=Number(inicio.value); i>=Number(fim.value); i=i+Number(passo.value)) {
            j = j+String(i)+' 👉 '
        }
    } else {
        for (i=Number(inicio.value); i<=Number(fim.value); i=i+Number(passo.value)) {
            j = j+String(i)+' 👉 '
        }
    }
}