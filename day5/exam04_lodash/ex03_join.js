import _ from 'lodash';

console.log(_.join([1,2,3,4],':')); // 1:2:3:4 이런식으로 출력됨


let ip = _.join([192,168,4,192],'.');
console.log(ip) // ip주소를 만들때...? 많이 사용된다.

let _ip_data = _.split(ip,'.') // 배열로 만듬
console.log(_ip_data)