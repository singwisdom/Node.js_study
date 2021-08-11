import repl from 'repl'
let repl_context = repl.start( // repl start 함수 호출
    {
        prompt:'>',
        input : process.stdin,
        out : process.stdout
    }
).context;

// 타이밍이 아주 중요한 함수!
function foo() {
    console.log('hello world!');
}

repl_context.foo = foo; // repl context에다가 foo함수를 매핑...?