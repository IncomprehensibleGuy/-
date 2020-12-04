
// 1
st = Math.pow(2, 10)
console.log(st)

// 2
console.log(Math.sqrt(245))

// 3
arr = [4, 2, 5, 19, 13, 0, 10]
console.log(Math.sqrt(arr.reduce( (res, x) => {
    res += Math.pow(x,3)
    return res
}, 0)))
