const fs = require('fs');

exports.index = (_req, res) => {
    return fs.readFile('./restFront.html', (err, data) => {
        if (err) throw err;
        res.end(data);
    });
};

exports.users = (_req, res, users) => {
    // 객체 형식은 못 보낸다.
    // 그래서 json으로 보낸다.
    return res.end(JSON.stringify(users));
}

exports.readstatic = (req, res) => {
    // 정적 파일은 readFile로 모두 읽어야 한다.
    console.log("ok",req.url);
    if(req.url.startsWith('C:\\favicon.ico')) return;
    return fs.readFile(`.${req.url}`, (err, data) => {
        return res.end(data);
    });
}