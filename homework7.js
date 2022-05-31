let array = [1, 0, 0, 2, null]
let evenNum = 0
let oddNum = 0
let zeroNum = 0
let nullNum = 0

console.log(null == undefined)

for (let i = 0; i < array.length; i++) {
    if (array[i] == undefined) {
        nullNum++
    } else if (array[i] === 0) {
        zeroNum++
    } else if ((array[i] % 2) === 0) {
        evenNum++
    } else {
        oddNum++
    }
}
console.log(`${evenNum} - четных, ${oddNum} - нечетных ${zeroNum} - нулей ${nullNum} - null`)