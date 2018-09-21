let arr = [7,3, 1]
function arrSort(arr) {
let temp = null
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp 
      }
    }
  }
  return arr
}
console.log(arrSort(arr));