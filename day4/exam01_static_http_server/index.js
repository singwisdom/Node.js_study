import http from 'http'
import {URL} from 'url'
import fs from 'fs'

const port = 8080
// http:localhost:8080/home.html
http.createServer((req,res)=> {

    console.log(req.url);
    console.log(req.method); // GET, POST 구분

    const urlObj = new URL(
        req.url,
        "http://exam.com" // url 상대경로일경우 앞에다가 붙이는 주소
    )

    console.log(urlObj.pathname);

    let header = {
        'Content-Type' : 'text/html'
    }

    let _path = './www' + urlObj.pathname;
    console.log(_path);
    
    
    try{
        let data = fs.readFileSync(_path);
        res.writeHeader(200,header);
        res.end(data);
    }
    catch (e) {
        header['Content-Type'] = 'text/plain'
        res.writeHeader(200,header);
        res.end('flie not found');
    }

}).listen(port);

console.log(`listen port : ${port}`)