import printHello from "./ex01_lib.js"
import foo from "./ex02_lib.js"

const lib2Obj = foo();

printHello();

lib2Obj.foo1();
lib2Obj.foo2();

console.log(lib2Obj)

// package.json
// cd day3 -> npm init -> 무조건 엔터
// import문을 사용하려면 -> package.json -> "type":"module" 추가