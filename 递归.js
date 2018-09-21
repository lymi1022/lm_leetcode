// 快速排序法
// 指在函数的定义中使用函数自身的方法
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }　
  var pivotIndex = Math.floor(arr.length / 2);
  // var base = arr.splice(pivotIndex, 1)[0];
  var base = arr[arr.length - 1];　　
	let left = []
	let right = []
	for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }　　
	}
	return [...quickSort(left), ...[base], ...quickSort(right)];
}

let arrSort = quickSort([1,4,2,1,5])

