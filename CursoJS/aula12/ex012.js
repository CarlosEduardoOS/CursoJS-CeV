 var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 17) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}