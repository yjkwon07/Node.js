exports.users = (req, res, users) => {
    const id = req.url.split('/')[2];
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        console.log('DELETE', body);
        delete users[id];
        return res.end(JSON.stringify(users));
    });
};