const crypto = require('crypto');
const util = require('util');
// promise를 지원하지 않는 (error, data) => {} 꼴의 콜백은
// util.promisify로 프로미스로 만들 수 있다.

// randomBytes 함수가 promise를 지원해줘야만 사용할 수 있다.
// 지원을 안 한다.... pbk2 또한... so =>util.promisify!!!
const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

// crypto.randomBytes(64, (err, buf) => {
//     const salt  = buf.toString('base64');
//     console.log('salt', salt);
//     console.time('암호화시간');
//     crypto.pbkdf2('비밀번호', salt , 651935, 64, 'sha512', (err, key) => {
//         console.log("password", key.toString('base64'));
//         console.timeEnd('암호화시간');
//     });
// });

// randomBytes(64) 
// .then( (buf) => {
//     const salt  = buf.toString('base64');
//     return pbkdf2Promise('비밀번호', salt , 651935, 64, 'sha512');
// })
// .then( (key) => {
//     console.log("password", key.toString('base64'));
// })
// .catch( (err) => {
//     console.error(err);
// })

// promise를 사용했을 때 await을 사용할 수 있다.
(async () => {
    const buf = await randomBytesPromise(64);
    const salt = buf.toString('base64');
    const key = await pbkdf2Promise('비밀번호', salt , 651935, 64, 'sha512');
    console.log("password", key.toString('base64'));
})();