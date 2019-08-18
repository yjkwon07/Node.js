# global
__window는 웹 브라우저의 `전역 객체` 이다.__

__노드의 전역 객체는 `global`__ 
```
console.log(global);
```

전역 객체이기 때문에 파일 간 global이 공유 된다.

__프로그래밍에서는 위험할 수 있기 때문에 사용 안하는것을 추천한다.__

__globalA.js__
```javascript
    module.exports = () => global.message;
```

__globalB.js__
```javascript
    const A = require('./globalA');

    global.message = '안녕하세요';
    console.log(A()); // out: 안녕하세요.
```