// 많이 사용한다 ****
// 모든 속성, 메서드 다 중요하다.
const path = require('path');
// dir 구분자
console.log(path.sep);
// 환경변수 구분자
console.log(path.delimiter);
// 현재 파일 경로
console.log(path.dirname(__filename));
// 확장자
console.log(path.extname(__filename));
// 파일명
console.log(path.basename(__filename));
// 구성요소 쪼개기
console.log(path.parse(__filename));
console.log(path.format({
    root: 'C:\\',
    dir:
        'C:\\Users\\cheerup\\Desktop\\nodejs_study\\Node\\7. path 모듈',
    base: 'path.js',
    ext: '.js',
    name: 'path'
}));

// 알아서 경로를 잘 잡아준다.
console.log(path.normalize('C:/Users/cheerup\\Desktop\\nodejs_study\\Node'));

// 절대 , 상대 파악해주기
console.log(path.isAbsolute('C:/Users/cheerup'));
// 경로 2개 첫번째 인자로 2번째 까지 가는 경로 리턴
console.log(path.relative(__filename, 'C:/Users/cheerup'));

// **엄청 중요
// 이동하기 
// 절대 경로 무시하고 합침(상대 경로)
console.log(path.join(__dirname, '..', '..', '\\Node'));
// 정대 경로 고려하고 합침 루트는 C:\
console.log(path.resolve(__dirname,'..', '..', '\\Node'));