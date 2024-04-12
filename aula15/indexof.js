var num = [2,5,9,7,8]
var pos = num.indexOf(7)
var pos2 = num.indexOf(3)

if (pos2 == -1) {
    console.log('Não foi possível encontrar o número 3 dentro dos vetores')
} else {
    console.log(`O valor 3 está na posição ${pos2}`)
}

console.log(`O valor 7 está na posição ${pos}`)

