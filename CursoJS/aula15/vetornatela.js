var valores = [1, 2, 3, 4, 5]
console.log('Usanddo FOR:')
console.log('')
for (var pos = 0; pos < valores.length; pos++) { //Nesse caso não pode usar o <= pq se não da undefined
    console.log(`A posição / elemento ${pos} tem o valor ${valores[pos]}`)
}
console.log('')
console.log('Usando FOR IN')
console.log('')
for (var pos in valores) {
    console.log(`A posição / elemento ${pos} tem o valor ${valores[pos]}`)
}
console.log('')
console.log('Buscando dados')
console.log('')

console.log(valores.indexOf(3))
console.log(valores.indexOf(5))
console.log(valores.indexOf(6))//Por algum motivo, quando o numero não está no vetor ele mostra -1