
// 1
str = 'я учу javascript!'
console.log(str.length)

// 2
console.log(str.substr(2,3) + str.substr(5,11))
console.log(str.substring(2, 5) + str.substring(5, 16))
console.log(str.slice(2,5) + str.slice(5, 16))

// 3
console.log(str.indexOf('учу'))

// 4
function cut(str, n) {
    if (str.length > n) return str.slice(0, n)
    return str
}

n = 4
result = cut(str, n)
console.log(result)
n = 100
result = cut(str, n)
console.log(result)
