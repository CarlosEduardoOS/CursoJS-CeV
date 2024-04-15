function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manha250.png'
        document.body.style.background = '#f4de78'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde250.png'
        document.body.style.background = '#f3bb85'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite250.png'
        document.body.style.background = '#283c43'
    }
}

