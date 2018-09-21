var arr = [5,3,2,7,9]
function qSort(arr) {
  if (arr.length === 0) return []
  var left = []
  var right = []
  var pivot = arr[0]
  for(var i = 0; i < arr.length; i++) {
    if (arr[i]<pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return qSort(left).concat(pivot, qSort(right))
}
console.log(qSort(arr));