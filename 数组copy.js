let _ = require('lodash')
let arr = [4, 6, 7]
let brr = new Array(3)
for(let i = 0; i < brr.length; i++) {
  brr[i] = arr[i];
}

let crr = [{a: 33},{b: 44}]
let drr = crr
let err = _.clone(crr)
