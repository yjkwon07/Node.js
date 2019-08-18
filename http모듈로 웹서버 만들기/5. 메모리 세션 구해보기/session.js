// 세션을 쿠키 없이 생성할 수 있지만  
// 쿠키를 사용해서 유지하는 세션을 많이 이용한다.
// 쿠키의 단점이 설정한 값을 다 볼 수 있다. 보안 취약
// 1차적인 노출을 피하자
// 메모리에 데이터를 저장하는 세션을 설정할 것이다.

// 실무에서는 다른 방법을 사용하기 때문에 세션의 원리만 파악하자
// session의 key갑과 value를 랜덤숫자로 원래 값을 숨겨야 한다.
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = "") =>
    cookie
        .split(";")
        .map(v => v.split("="))
        .map(([k, ...vs]) => [k, vs.join("=")])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

// 객체 생성
const session = {};

const server = http.createServer((req, res) => {
    const cookie = parseCookies(req.headers.cookie);
    if (req.url.startsWith("/login")) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const randomInt = Date.now();
        session[randomInt] = {
            name, 
            expires,
        };
        res.writeHead(302, {
            'Location': '/',
            'Set-Cookie': `session=${randomInt};Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
        // session[cookies.session]이 undefined면 코드에 에러가 나기 때문에 그것을 막기 위한 보호 처리라고 보시면 됩니다
    } else if (cookie.session && session[cookie.session] && session[cookie.session].expires > new Date()) {
        res.writeHead(200, {
            'Content-Type': `text/html; charset=utf-8`
        });
        res.end(`${session[cookie.session].name}님 안녕하세요~~`);
    } else {
        fs.readFile('router.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
}).listen(8000, () => {
    console.log('서버의 요청 받고 있는중.....');
});
server.on('error', (err) => {
    console.errror(err);
});

// 지금 구조의 세션도 브라우저의 쿠키(세션 아이디)가 노출되면
// 서버 정보가 유추될 수 있다.

