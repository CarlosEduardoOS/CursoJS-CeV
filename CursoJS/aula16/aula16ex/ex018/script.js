let num = document.querySelector('input#fnum') //.querySelector('input#fnum')
let lista = document.querySelector('select#flista') //.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function reload() {
    window.location.reload()
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //vai verificar se é numero e se NÃO estiver na lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //apaga o input number
    num.focus() // faz com que voce nao precise clicar denovo no imput number
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) { 
            soma += valores[pos]
            if (valores[pos] > maior) {// Está verificando se o valor em determinada posição é maior do que o da variavel maior, já existente. se for, a variavel maior é reescrita, e iniciase o looping novamente
                maior = valores[pos]
            }
            if (valores[pos] < menor) { //mesma coisa soq pra variavel menor
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = '' //apaga o que tiver dentro da div res
        res. innerHTML += `<p>Ao todo temos ${tot} números cadastrados(s)</p>`
        res.innerHTML += `<p>O maior número cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média entre todos os valores é ${media}</p>`
    }
}