import _ from 'lodash'

const _input = [1,2,3,4];

let _output = _.reduce(_input, (acc,o)=> {

    console.log(o);
    acc+=o;
    return acc;
},0)

console.log(_output)