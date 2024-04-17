function contar(){
    let ini = document.getElementById('inicio')    
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('contagem')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        //window.alert('[ERRO] Faltam dados!') (achei meio fodase esse alert aqui por isso eu tirei)
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} &#x1F449;`
            }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} &#x1F449;`
            }
        }
        res.innerHTML += '&#x1F3C1;'
    }
}