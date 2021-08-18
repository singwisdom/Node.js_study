import _ from 'lodash'

let a = [1,2,3]
let b = [4,5,6]

console.log(a+b);

let c = _.concat(a,b) // _.concat(a,b,[5,6,7,8],[9,10]) 이런식으로도 쓸 수 있음

console.log(c);