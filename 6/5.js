

// 1
function getRandom(min= 0, max = 10, isInt = true) {
    let result = Math.random() * (max - min) + min
    if (isInt) { result = Math.trunc(result) }
    return result
}

console.log(getRandom(1, 100))

// 2
arr = []
for (let i = 1; i < 11; i++) arr.push(getRandom(1, 11))
console.log(arr)
