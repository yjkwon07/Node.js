const crypto = require('crypto');
// 비밀번호는 hash방식으로 암호화 해 복호화되지 않는 문자열로 만든다.
// 암호문(해시)을 저장한 후 사용자의 입력 비밀번호를 암호화한 것과 비교한다.
// 단방향 암호화 (복호화가 없는 것)

// 암호화, 비밀번호, 출력 방식
crypto.createHash('sha512').update('비밀번호기입').digest('base64');

//----------------------------------------------------------
// 비밀번호 충돌 공격
// pbkdf2 알고리즘 사용
// 해시 충돌 공격을 어렵게 하기 위해 salt이라는 문자열을 원래 
// 비밀번호에 추가하고 iteration 횟수를 높인다.

// salt는 암호화된 비밀번호와 같이 저장하고
// iteration은 1초  정도 걸릴 때까지 올려주면 좋다 (너무 높으면 시간이 오래걸림)
// console.time -> console.timeEnd

// byte
let hashkey = '21FKXFzgQoFT9Do5Dwrzsjpf/pyO71JVOoGDK2SX7trPV+IWPU2HPt/g+6PMWZdyUdH7iQr/b0mNrj92MvFJSQ==';
let salt = 'chpKzux6pPJuX68JC6iM7hE8Uk1zxDTOcNllD5p6aXfIbPyYxEWS3LmAXHiCUcqfExVz2PD/tHwVD4isuBKLkg==';
// crypto.randomBytes(64, (err, buf) => {
//     salt = buf.toString('base64');
//     console.log('salt', salt);
//     console.time('암호화시간');
//     crypto.pbkdf2('비밀번호', salt, 651935, 64, 'sha512', (err, key) => {
//         hashkey = key.toString('base64');
//         console.log("password", hashkey);
//         console.timeEnd('암호화시간');
//     });
// });

// 실무에선 bcrypt, scrypt를 사용한다.
crypto.pbkdf2('비밀번호', salt, 651935, 64, 'sha512', (err, key) => {
    console.log(key.toString('base64') === hashkey);
});