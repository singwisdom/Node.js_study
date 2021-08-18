import _ from 'lodash'

console.log(_.remove([1,2,3,4,5,6,7],o=>o%2)) // 짝수만 제거됨
console.log(_.remove([1,2,3,4,5,6,7],o=>(o%2 !=0))) // 짝수만 제거됨

console.log(_.remove([1,2,3,4,5,6,7],o=>(o%2==0))) // 홀수만 제거