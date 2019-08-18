// 7. HTTP 메서드(req.method)로 분기 처리하기
// 8. 요청 본문 처리하기(POST , PUT, PATCH, DELETE)
const http = require('http');
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');
const users = {};

http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            get.index(req, res);
        } else if (req.url === '/users') {
            get.users(req, res, users);
        }
        // 정적 파일 처리
        get.readstatic(req, res);
    } else if (req.method === 'POST') {
        if (req.url === '/users') {
           post.users(req, res, users);
        }
    } else if (req.method === 'PUT') {
        if (req.url.startsWith('/users/')) {
           put.users(req, res, users);
        }
    } else if (req.method === 'DELETE') {
        if (req.url.startsWith('/users/')) {
           remove.users(req, res, users);
        }
    }
}).listen(8005, () => {
    console.log('8005번 포트에서 서버 대기 중입니다.');
});