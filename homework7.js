let array = [1, 4, 5, 2, 4]
let evenNum = 0
let oddNum = 0
for (i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 0) {
        evenNum = evenNum + 1
    } else {
        oddNum = oddNum + 1
    }
}
console.log(`${evenNum} - четных, ${oddNum} - нечетных`)