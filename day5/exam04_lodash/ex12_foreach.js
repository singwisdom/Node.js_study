import _ from 'lodash'

_.forEach([1,2,3,4],o=>console.log(o)); // 하나씩 출력됨

let _a = [1,2,3,4]
for(let i=0;i<_a.length;i++){
    console.log(_a[i]);
}

console.log('----------------')
_.forEach({'a':1, 'b':2},(o,key)=>{
    console.log(`key : ${key}, value : ${o}`);
});