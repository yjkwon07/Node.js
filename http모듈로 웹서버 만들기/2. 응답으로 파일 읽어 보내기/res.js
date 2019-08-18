const http = require('http');
const fs = require('fs');
// html을 만들어서 통채로 보내버리자... (협업하기 너무 힘들잔항..)
// data why? toString?? 브라우저에서 알아서 처리해준다
const server = http.createServer( (req, res) => {
    console.log('서버 실행');
    fs.readFile('./response.html', (err, data)=>{
        res.write(data);
        res.end();
    });
}).listen(8000, () => {
    console.log('8000번 포트에서 서버 대기중....');
});

// 노드는 에러에 취약하다... 
// 에러 체크 
server.on('error', () => {
    console.log('8000번 포트에서 서버 대기중입니다.');
});


