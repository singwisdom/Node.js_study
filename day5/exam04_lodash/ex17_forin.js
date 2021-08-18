import _ from 'lodash'

function foo() {
    this.a = 1;
    this.b = 2;
}

foo.prototype.c = 1
foo.prototype.bar = function() {
    console.log(this.a)
}

let fooObj = new foo();

console.log(fooObj)

_.forIn(fooObj, (o,key)=>{
    console.log(o,key)
})

let obj = {a:1,b:2}
_.forIn(obj, (o,key)=>{
    console.log(o,key)
})

// foo_a = _.bind(foo.obj)