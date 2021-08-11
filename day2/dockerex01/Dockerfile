FROM node:14  

RUN apt-get update && \
apt-get install -y vim nano net-tools openssh-server

# docker build . -t study/hello-node:step1 // 이미지 받아오기
# docker rmi  // 이미지 지우기
# docker create -it --name doc-node-test study/hello-node:step1 // 컨테이너 만들기
# docker ps -a // 파일 목록 보기
# docker start 컨테이너아이디(이름) // 실행
# docker exec -it 컨테이너아이디(이름) bash // 가상머신 실행, bash로 접속
# docker stop 컨테이너아이디(이름) // 실행 중지
# docker rm 컨테이너아이디(이름) // 삭제

# docker create -p 8080:8080 -p 8022:22 // 포트 포워딩
# nano /etc/ssh/sshd_config // 
# openssh-server -> /etc/ssh/sshd_config -> PermisionLogin yes
# service ssh start
# ssh root@loacalhost -p 8022 // 리눅스로 접속 (ssh로 접속)
# logout // 로그아웃
# remote ssh 설치 -> 원격탐색기 설정추가 // vscode 로 접속

# curl -i -X GET http://ip주소:포트번호(8080) // curl 사용법
# curl -i -X GET http://localhost:포트번호(8080)/echo?msg=hello
# -i -> 헤더까지 출력 
# -X -> method 지정, (GET,POST)
# 맨 뒤에 uri 지정, uri -> http(스키마)를 포함한 전체 요청 문장



## test_server에 만들 파일
# import http from 'http'
# const httpServer = http.createServer((req, res)=> {
#     res.end('hello docker!');
# })
# httpServer.listen(8080);
# console.log('server start at 8080')

# mongo DB
# docker run --name mongodb_container -v C:\database:/data/db -p 27017:27017 mongo
# db.memo.insert({tile:"hello",text:'welcome to mogo land'})
# db.memo.find()

# bash창에서 바로 파일 목록 볼 수 있는 법
# docker exec -it cf9636f25a52 ls
# docker exec -it cf9636f25a52 pwd (현재 파일 위치..?)
# docker exec -it -w //home//work//nodejs_study(파일 위치) cf9636f25a52(컨테이너 아이디) node testserver.js ==> bash에서 바로 파일 실행시킬 수 있는 방법



## tcp server
# net 모듈사용, createServer (내부적으로 생성)
# 서버 소켓을 열고(만들고) 기다린다.
# 접속이 들어오면 클라이언트 소켓을 하나 만든다.
# 요청을 처리한다.
# 접속 종료


## tcp client
# net, new net.socket (직접 생성)
# 소켓을 만들고 접속을 시도한다.
# 서버에게 요청을 한다. 
# 접속종료 통지받음

## 도커로 서비스 돌리기
# docker exec -d -w <워킹 디랙토리> -p 호스트포트:가상기기포트 <컨테이너ID> 명령어
# -d ==> 데몬으로 실행(백그라운드 실행)
# -w ==> 명령을 실행할 때 기준이 되는 디렉터리