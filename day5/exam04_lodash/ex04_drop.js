import _ from 'lodash'
// import {drop} from 'lodash-es' 하려면 npm i lodash-es 설치하기

console.log(_.drop([1,2,3,4,5,6])) // 하나씩 잘림...? 연쇄적으로도 가능
console.log(_.drop(_.drop([1,2,3,4,5,6])))

console.log(_.dropWhile([1,2,3,4,5,6],(o)=> { // 조건이 있음
    return o <3
})) 

console.log(_.dropWhile([1,2,3,4,5,6],o=>o<3)); // 위에와 같은 코드