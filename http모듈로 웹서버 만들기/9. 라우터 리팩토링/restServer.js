const http = require('http');
const fs = require('fs');
/*
람다같은 환경에서 서버리스 코딩을 할 때 메모리가 부족해서 
익스프레스같은 프레임워크 없이 순수 노드로 코딩하곤 합니다.
*/
const users = {};
const router = {
    get: {
        '/': (_req, res) => {
            fs.readFile('./restFront.html', (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data);
            });
        },
        '/users': (_req, res) => {
            res.end(JSON.stringify(users));
        },
        '*': (req, res) => {
            fs.readFile(`.${req.url}`, (err, data) => {
                if (err) {
                    res.writeHead(404, 'NOT FOUND');
                    res.end('NOT FOUND');
                }
                res.end(data);
            });
        }
    },
    post: {
        '/users': (req, res) => {
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('POST 본문(Body):', body);
                const { name } = JSON.parse(body);
                const id = Date.now();
                users[id] = name;
                res.writeHead(201);
                res.end('등록 성공');
            });
        }
    },
    put: {
        '/users': (req, res) => {
            const key = req.url.split('/')[2];
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('PUT 본문(Body):', body);
                users[key] = JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            });
        },
    },
    delete: {
        '/users': (req, res) => {
            if (req.url.startsWith('/users/')) {
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }
    }
};
http.createServer((req, res) => {
    const matcjedUrl = router[req.method.toLowerCase()][req.url];
    // 기본값 연산자(||)
    (matcjedUrl || router[req.method.toLowerCase()]['*'])(req, res);
    // 보호 연산자(&&)
    // (router && roter[req.method] && router[req.method][req, res])
}).listen(8085, () => {
    console.log('8085번 포트에서 서버 대기중입니다');
});