/// package.json에서 type : module로 설정 안해도 index.js를 index.mjs 로 바꾸면 된다!

import http from 'http'
import { URL } from 'url'

const port = 8090

http.createServer((req, res) => {

    const urlObj = new URL(
        req.url,
        'http://example.com'
    );

    console.log(`pathname : ${urlObj.pathname}`);
    console.log(`search : ${urlObj.search}`);
    console.log(`hostname : ${urlObj.hostname}`);

    let result = {
        r: 'ok'
    }
    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용 
    }
    res.writeHead(200, header);

    let method = req.method;

    if(method ==='GET'){
        if (urlObj.pathname == '/echo') {
            let _title = urlObj.searchParams.get('title');
            let _msg = urlObj.searchParams.get('msg');
    
            result.title = _title
            result.msg = _msg
        }
        res.end(JSON.stringify(result));
    }
    else if(method==='POST'){ // 포스트 처리

        if (urlObj.pathname == '/echo') {
           let body_data =''
           res.on('data',(playload)=> { // 요청측 데이터를 받는 부분, 데이터가 한번에 오지않을수도있다.
                body_data += playload
           })
           res.on('end',()=> {
               result.data = body_data
            res.end(JSON.stringify(result));
           })
        }
        
    }

   
    //swich case , api가 많을 경우 
    

}).listen(port);

console.log(`listen : ${port}`);