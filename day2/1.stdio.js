process.stdin.resume() //keyboard
process.stdin.setEncoding('utf-8')
const util = require('util')

process.stdin.on('data',function(text) {
    console.log(`echo : ${text}`);
    // console.log('echo :'+ text); 위와 같은 문법

    if(text === 'exit\r\n'){
        process.exit()
    }

}) // nodejs는 문법상 on이라는것을 많이 씀