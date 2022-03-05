var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log(`São exatamente ${hora}, bom dia!`)
} else if (hora < 18) {
    console.log(`São exatamente ${hora}, boa tarde!`)
} else {
    console.group(`São exatamente ${hora}, boa noite!`)
}