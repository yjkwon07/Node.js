// deprecated는 지원이 조만간 중단될 메서드임을 알려줄 때 사용한다.
// API만들 때 유용
const util = require('util');

const dontsemee = util.deprecate( (x, y) => {
    console.log(x + y);
}, "이 함수는 2019년 12월 부로 지원하지 않습니다.");

dontsemee(1, 2);
