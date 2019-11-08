# util 모듈

## deprecated
__`deprecate`는 지원이 조만간 중단될 메서드임을 알려줄 때 사용한다.__

**API만들 때 유용**
```javascript
    const util = require('util');

    const dontsemee = util.deprecate( (x, y) => {
        console.log(x + y);
    }, "이 함수는 2019년 12월 부로 지원하지 않습니다.");
    dontsemee(1,2);
```
결과
```
    DeprecationWaring : 이 함수는 2019년 12월 부로 지원하지 않습니다.
```

## promisify

**`promise를 지원하지 않는`** (error, data) => {} 꼴의 콜백은 **`util.promisify로`** 프로미스로 만들 수 있다.

**`randomBytes함수가 promise를`** 지원해줘야만 사용할 수 있다.

`하지만 지원을 안 한다.... pbk2 또한...` 

__`so =>util.promisify!!!`__
```javascript
    const crypto = require('crypto');
    const util = require('util');

    const randomBytesPromise = util.promisify(crypto.randomBytes);
    const pbkdf2Promise = util.promisify(crypto.pbkdf2);

    randomBytesPromise(64) 
    .then( (buf) => {
        const salt  = buf.toString('base64');
        return pbkdf2Promise('비밀번호', salt , 651935, 64, 'sha512');
    })
    .then( (key) => {
        console.log("password", key.toString('base64'));
    })
    .catch( (err) => {
        console.error(err);
    })
```
__async , await로 활용__
```javascript
    // promise를 사용했을 때 await을 사용할 수 있다.
    (async () => {
        const buf = await randomBytesPromise(64);
        const salt = buf.toString('base64');
        const key = await pbkdf2Promise('비밀번호', salt , 651935, 64, 'sha512');
        console.log("password", key.toString('base64'));
    })();
```