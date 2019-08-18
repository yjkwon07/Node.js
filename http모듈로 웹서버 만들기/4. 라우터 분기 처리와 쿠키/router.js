const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
 
// 쿠키 문자열 => 객체화(예시: hello=world;name=zerocho;node=textbook)
const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

// req.url : 어떤 주소로 사용자가 접속했는지 알 수 있다.
const server = http.createServer( (req, res) => {
    console.log('parseCookies',parseCookies(req.headers.cookie));
    const cookies = parseCookies(req.headers.cookie); // 쿠키 값을 받아온것을 객체화로 사용 가능하다.
    if(req.url.startsWith('/login')) {
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        // HttpOnly : 자바스크립트에서 쿠키를 접근 못하게 한다.
        // Path 가 '/'면 -> '/' 아래 모든 경로에서도 유효하다.
        // ex) /post, /post/1
        // 상태 코드 302는 임시 이동으로, 
        // 브라우저에게 Location에 적힌 페이지로 이동하라는 뜻이다.
        res.writeHead(302, {
            'Location' : '/',
            'Set-Cookie' : `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`});
        res.end();
    } 
    else if(cookies.name) {
        res.writeHead(200, {
            'Content-Type' : `text/html; charset=utf-8` 
        });
        res.end(`${cookies.name}님 안녕하세요`);
    }
    else {
        fs.readFile('./router.html' , (err, data) => {
            if(err) throw err;
            res.end(data);
        });
    }
}).listen(8000);
server.on('listening', () => {
    console.log('8000번 포트에서 서버 대기중....');
});
server.on('error', (err) => {
    console.log(err);
});
