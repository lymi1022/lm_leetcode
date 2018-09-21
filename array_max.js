let arr = [3, 5,7,2, 8, 3]
let max = null
for(let i = 0; i < arr.length; i++) {
  max = arr[i] > max ? arr[i] : max
}
// or
let brr = [4,2,7,1,7,8]
const sb = brr.sort((a, b) => a - b)
const sb1 = brr.sort((a, b) => b - a)