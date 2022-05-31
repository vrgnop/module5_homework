let x = [1, 2, 3, 1, 1, 1]

let sum = x.reduce(function (sum,elem) {
    return sum + elem
})
let y = 0
for (let i = 0; i < x.length; i++) {
    if ((sum / x[i]) !== x.length) {
    } else {
        y++
    }
}
if (y === i) {
    console.log(true)
} else {
    console.log(false)
}