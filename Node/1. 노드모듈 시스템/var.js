const odd = '홀수입니다.';
const even = '짝수입니다.';

// 모듈화 
// module.exports = {
//     odd : odd,
//     even : even,
// };

// ES2015 
// module.exports = {
//     odd,
//     even,
// };


// module.exports === exports 
// exports는 객체 속성만 담을 수 있다.
exports.odd = odd;
exports.even = even;