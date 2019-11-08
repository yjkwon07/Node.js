# module
__모듈은 여러 번 `재사용`될 수 있다.__

__index.js__
```javascript
    const {odd, even} = require('./var');
    // 변수명은 require 대상의 return값과(module.exports) 다를 수 있다.
    const checkNumer = require('./fun');

    function checkStringOddEven(str) {
        if(str.length % 2) {
            return odd;
        }
        return even;
    }

    console.log(checkNumer(10));
    console.log(checkStringOddEven('hello'));
```

__var.js__
```javascript
    const odd = '홀수입니다.';
    const even = '짝수입니다.';

    // 모듈화 
    /*
        module.exports = {
            odd : odd,
            even : even,
        };
    */

    // ES2015 
    /*
        module.exports = {
            odd,
            even,
        };
    */

    // module.exports === exports(객체) 
    // module.exports와 exports는 참조관계이기 때문이다.
    // 단, exports는 객체 속성만 담을 수 있다.(함수도 값)
    // 즉, 객체 리털럴은 exports.~ 으로 바꿀 수 없다. 
    exports.odd = odd;
    exports.even = even;
```

__fun.js__
```javascript
    // const variable = require('./var');

    // console.log(variable.odd);
    // console.log(variable.even);

    // ES 2015
    // 비구조화 할당
    const {odd ,even} = require('./var');
    console.log(odd);
    console.log(even);
    // ./var의 할당 된 값을 다시 모듈이 될 파일로 리턴 될 수 있다.
    // module.exports = {odd, even} 

    function checkOddEven(num) {
        if(num % 2) {
            return odd;
        }
        return even;
    }

    module.exports = checkOddEven;
```

