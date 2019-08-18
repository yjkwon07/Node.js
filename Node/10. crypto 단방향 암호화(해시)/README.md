# crypto 단방향 암호화
비밀번호는 hash방식으로 암호화 해 복호화되지 않는 문자열로 만든다.

암호문(해시)을 저장한 후 사용자의 입력 비밀번호를 암호화한 것과 비교한다.

단방향 암호화 (복호화가 없는 것)
```javascript
    const crypto = require('crypto');

    // 암호화, 비밀번호, 출력 방식
    crypto.createHash('sha512').update('비밀번호기입').digest('base64');
```
__주의__

비밀번호 충돌 공격

`pbkdf2 알고리즘 사용`

해시 충돌 공격을 어렵게 하기 위해 문자열을 원래 비밀번호에 추가하고 iteration 횟수를 높인다.

문자열은 암호화된 비밀번호와 같이 저장하고

iteration은 1초  정도 걸릴 때까지 올려주면 좋다 (너무 높으면 시간이 오래걸림)

__console.time -> console.timeEnd__
```javascript
    // byte
    crypto.randomBytes(64, (err, buf) => {
        const salt  = buf.toString('base64');
        console.log('salt', salt);
        console.time('암호화시간');
        crypto.pbkdf2('비밀번호', salt , 651935, 64, 'sha512', (err, key) => {
            console.log("password", key.toString('base64'));
            console.timeEnd('암호화시간');
        });
    });
```
결과
```
    salt q+ymsM2ru11RTQvJRChVs2fijxUs53ioDtFKJludE0Nby751qjXnc3Sr7EuVJCwcE2vPFLtIUaCMYN83z+QsVQ==
    password cGSfqyFVWam/KXPVvGg1v63A+FjNsPgtiD73ClmDMrXrZaid0sOBrGpKNs6vjn+m43ZnuRdAY3KhCcWZvTzNDg==
    암호화시간: 668.458ms
```
```javascript
    crypto.pbkdf2('비밀번호', salt, 651935, 64, 'sha512', (err, key) => {
        console.log(key.toString('base64') === hashkey);
    });
```
실무에선 bcrypt, scrypt를 사용한다.
