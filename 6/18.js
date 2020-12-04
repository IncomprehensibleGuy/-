
// 1
arr = [1, 2, 3, 4, 5]
arr.splice(1, 2)
console.log(arr)

// 2
arr = [1, 2, 3, 4, 5]
arr2 = arr.splice(1, 3)
console.log(arr2)

// 3
arr = [1, 2, 3, 4, 5]
arr.splice(3, 0, 'a', 'b', 'c')
console.log(arr)

// 4
arr = [1, 2, 3, 4, 5]
arr.splice(1, 0, 'a', 'b')
arr.splice(6, 0, 'c')
arr.splice(8, 0, 'e')
console.log(arr)
