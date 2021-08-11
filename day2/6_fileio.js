import fs from 'fs'
/*
    text2.txt 파일을 읽어서 콘솔창에 보여주는 프로그램
    동기함수
    예제 5번과 비슷
*/
let data = fs.readFileSync (
    'text2.txt',
    //'hello',                읽는 내용이니까 이건 빼고 대신 데이터 받아오는 코드(let date =) 작성
    {
        encoding : 'utf-8'
    }
);

console.log(data + ' 1');  


/*
    비동기
    data로 받지 않고 callban으로 받아야 한다.
    예제 4번과 비슷
    위와 아래의 코드는 같은 내용을 담고 있지만 동기, 비동기의 차이
*/
fs.readFile(
    'text2.txt',  
    //'hello',
    {
        encoding : 'utf-8'  //해주어야 함
    },
    function(err, data){ //4번은 에러만 받았는데 data를 받아와야 한다.
        if(err){   
            console.log(err);  //에러 출력
        }
        else{
            console.log(data + ' 2');
        }
    }
);
console.log('done');
