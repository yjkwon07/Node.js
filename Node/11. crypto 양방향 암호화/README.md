# crypto 양방향 암호화
복호화 만들기

열쇠가 노출되면 안된다.!!!!

```javascript
    const crypto = require('crypto');

    const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
    let result = cipher.update('비밀번호', 'utf8', 'base64');
    result += cipher.final('base64');
    console.log('암호', result);
```

__cretaeCipher utf8 평문을 base64 암호문으로 createDecipher base64 암호문을 utf8 평문으로__

```javascript
    const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
    let result2 = decipher.update(result, 'base64', 'utf8');

    // 암호화 복호화 마무리 
    result2 += decipher.final('utf8');
    console.log('평문', result2);
```
[참고](https://www.zerocho.com/category/NodeJS/post/593a487c2ed1da0018cff95d)