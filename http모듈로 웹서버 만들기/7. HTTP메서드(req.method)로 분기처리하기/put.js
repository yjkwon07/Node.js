exports.users = (req ,res, users) => {
    const id = req.url.split('/')[2];
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        console.log('PUT', body);
        users[id] = JSON.parse(body).name;
        res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
        res.end(JSON.stringify(users));
    });
};
