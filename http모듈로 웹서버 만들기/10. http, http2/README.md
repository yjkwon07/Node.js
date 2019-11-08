# http, http2

https를 사용하기 위해 인증서가 필요하다

ex) letsencrypt 인증서 

http2 -> 속도면이 좋다 (https인 경우만)
```javascript
    const http = require('http');
    const https = require('https'); // 인증서 필요 
    const http2 = require('http2');
    const fs = require('fs');

    http.createServer( (_req, res) => {
        res.end('http server');
    });

    http2.createSecureServer( {
        cert : fs.readFileSync('도메인 인증서 경로'),
        key : fs.readFileSync('도메인 비밀키 경로'),
        ca : [
            fs.readFileSync('상위 인증서 경로'),
            fs.readFileSync('상위 인증서 경로'),
            fs.readFileSync('상위 인증서 경로'),
            fs.readFileSync('상위 인증서 경로'),
        ],
    }, (_req, res) => {
        res.end('http server');
    }).listen(443);
```