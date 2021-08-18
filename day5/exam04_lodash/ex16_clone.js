import _ from 'lodash'

var objects = [{'a':1},{'b':2}];

let objects2 = _.clone(objects)

console.log(objects == objects2);