# path 모듈

모든 속성, 메서드 다 중요하다.

__구분자__
```javascript
    const path = require('path');
    console.log(path.sep); // dir 구분자
    console.log(path.delimiter); // 환경변수 구분자
```

__경로확인__
```javascript
    const path = require('path');
    console.log(path.dirname(__filename)); // 현재 파일 경로 (C:\Users\yjkwon07\lecture)
    console.log(path.extname(__filename)); // 확장자 이름 (.js)
    console.log(path.basename(__filename)); // 파일명 (path.js)
    console.log(path.parse(__filename)); // 파일 구성요소 쪼개기(객체 불러옴)
    console.log(path.format({
        root: 'C:\\',
        dir:  'C:\\Users\\cheerup\\Desktop\\nodejs_study\\Node\\7. path 모듈',
        base: 'path.js',
        ext:  '.js',
        name: 'path'
    })); // 구성요소 합치기
```

__절대 경로 상대경로__
```javascript
    const path = require('path');
    console.log(path.normalize('C:/Users/cheerup\\Desktop\\nodejs_study\\Node')); // 알아서 경로를 잘 잡아준다.

    console.log(path.isAbsolute('C:/Users/cheerup')); // 절대(C://users) or 상대(../) 경로 파악해주기
    console.log(path.relative(__filename, 'C:/Users/cheerup')); // 경로 2개 첫번째 인자로 2번째 까지 가는 경로 리턴
```

__이동하기__ 
```javascript
    console.log(path.join(__dirname, '..', '..', '\\Node')); //절대 경로 무시하고 합침(상대 경로)
    // out : c:\users\Node

    console.log(path.resolve(__dirname,'..', '..', '\\Node')); // 절대 경로 고려하고 합침 루트는 C:\
    // out : c:\Node
```