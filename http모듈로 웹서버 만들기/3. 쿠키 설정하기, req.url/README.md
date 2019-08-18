# cookie

요청이나 응답에는 그에 대한정보를 담고 있는 헤더가 포함되어 있다.

/favicon.ico => title icon

[참고(decodeURIComponent)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)

```javascript
    const http = require('http');

    const parseCookies = (cookie = '') => {
        cookie
            .split(';')
            .map(v => v.split('='))
            .map( ([k, ...vs]) => [k , vs.join('=')])
            .reduce( (acc, [k, v]) => {
                acc[k.trim()] = decodeURIComponent(v);
                return acc;
            }, {});
    }

    // req.url : 어떤 주소로 사용자가 접속했는지 알 수 있다.
    const server = http.createServer( (req, res) => {
        console.log(parseCookies(req.headers.cookie)); // 쿠키 값을 받아온것을 객체화로 사용 가능하다.
        res.writeHead(200, { 'Set-Cookie' : 'mycookie=test'});
        res.end('Hello Cookie');
    }).listen(8000);
    server.on('listening', () => {
        console.log('8000번 포트에서 서버 대기중....');
    });
    server.on('error', (err) => {
        console.log(err);
    });
```