import _ from 'lodash'

console.log(_.take([1,2,3,4,5,6])) // 결과 : [1]
console.log(_.take([1,2,3,4,5,6],2)) // 결과 : [1,2]

console.log(_.takeWhile([1,2,3,4,5,6],o=>o<3)) // 3보다 작을때까지