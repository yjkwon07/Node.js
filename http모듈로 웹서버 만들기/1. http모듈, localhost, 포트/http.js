// http모듈이 (서버) 서버를 돌아갈 수 있게 해준다. (runtime)
// http 기본포트(80) https(443) 기본 포트는 생략 가능
// 포트가 다르면 호스트가 같더라도 다른 사이트처럼 동작할 수 있다.
// 1024 아래 포트는 다른 프로그램이 사용 중일 확률이 높다.
// 또 리눅스나 맥에서는 관리자 권한이 필요하다.
// 다른 프로그램이 이미 사용하고 있는 포트를 쓰면 에러가 발생한다.
// 요청이 왔을 때 꼭 수락해야 하는 것은 아니고, 거절할 수도 있다.
const http = require('http');

http.createServer( (req, res) => {
    console.log('서버 실행');
    res.write(`<h1>Hello Node</h1>`);
    res.end(`<h1>Hello End</h1>`);
}).listen(8000, () => {
    console.log('8000번 포트에서 서버 대기중....');
});