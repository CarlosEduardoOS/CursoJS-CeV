var num = [5, 8, 4, 9, 3] //da para combinar string com number 
num[3] = 6 //add 6 na posição 4, substituindo o 9
num[4] = 2 //add 2 na posição 5, substituindo o 3
num.push(7) //add uma nova posição e coloca o numero 7 nela
console.log(num[0])//1 posição
console.log(num[2])//3 posição 
console.log(`O vetor ${num} tem ${num.length} elementos, em ordem crescente fica ${num.sort()}`)

