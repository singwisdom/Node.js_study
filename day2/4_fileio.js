import fs from "fs";
/*
    package를 작성해주어야 실행이 된다.
    text.txt 파일에 hello가 입력되고 완료가 되면 done 과 ok가 파일에 출력된다.
*/
fs.writeFile(
    'test.txt',  
    'hello',
    {
        encoding : 'utf-8'  //해주어야 함
    },
    function(err){
        if(err){
            console.log(err);  //에러 출력
        }
        else{
            console.log('ok');
        }
    }
);  //hello라는 문자는 text.txt로 써라 stream과는 다른 개념


console.log('done');  //ok보다 먼저 실행이 된다 (비동기라 그럼)