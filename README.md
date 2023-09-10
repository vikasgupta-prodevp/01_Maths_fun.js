const score = 400
const balance = new Number(1000.00)
console.log(balance)
console.log(score)

console.log(balance.toString().length)
console.log(balance.toString().lastIndexOf(0))
console.log(balance.toFixed(2))


const userNumber = 1020.858748
console.log(userNumber.toPrecision(3))


const inumber = 1000000
console.log(inumber.toLocaleString())


//************************/
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.898))
console.log(Math.ceil(4.25))
console.log(Math.floor(5.5745))
console.log(Math.sqrt(5))
console.log(Math.min(4, 5, 6, 2, 8, 7, 1))
console.log(Math.max(6, 4, 2, 5, 8, 7, 6))



//math random
console.log(Math.random())
console.log(Math.floor(Math.random() * 10) + 1)
const min = 10
const max = 15
console.log(Math.floor(Math.random() * (max - min + 1) + min))
