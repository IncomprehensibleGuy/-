
// 1
arr = [12, 15, 20, 25, 59, 79]
console.log(arr.reduce((sum, n) => {
    sum += n
    return sum
}, 0) / arr.length)

// 2
function factorial(n) {
    let res = 1, i = n
    while (i > 0) { res *= i; i--; }
    console.log("Factorial " + n.toString() + " = ", res)
}

factorial(1)
factorial(2)
factorial(3)
factorial(4)
