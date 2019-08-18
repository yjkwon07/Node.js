exports.users = (req, res, users_data) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        // 본문 데이터가 스트림으로 온다.
        // request도 readStream으로 생각해야 한다.
        // front 에서 json 형식으로 짜여진 name의 변수를 보낸다. 
        console.log('POST 본문(Body):', body);
        const { name } = JSON.parse(body);
        const id = Date.now();
        users_data[id] = name;
        console.log('POST After post/users users[id]: ', users_data);
        // utf-8 config
        res.writeHead(201, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end('등록 성공');
    });
};