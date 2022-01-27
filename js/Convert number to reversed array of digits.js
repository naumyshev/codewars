
const digitize = (n) => n.toString().split('').reverse().map(i => Number(i))

console.log(digitize(123))