// 定义一个数组，向数组中插入50个0~100的随机数，
// 将其中的偶数复制到另一个数组并升序输出该数组的内容
let randomArr = []
for(let i = 0; i < 50; i++) {
  randomArr.push(parseInt(Math.random() * 100))
}
let rArr=[]
for (let i = 0; i <randomArr.length; i++) {
  if (randomArr[i] % 2 === 0) {
    rArr.push(randomArr[i])
  }
}
console.log(rArr);