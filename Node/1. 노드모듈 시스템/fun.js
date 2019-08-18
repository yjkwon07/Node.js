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

// 객체 리털럴 이기 때문에  exports.~ 으로 바꿀 수 없다. 
module.exports = checkOddEven;