let num = [5, 8, 9]
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num[3] = 6
console.log(num)

num.push(11)
num.sort(Number) // Coloquei Number para classificar da forma correta
console.log(num)
console.log(num.length)
