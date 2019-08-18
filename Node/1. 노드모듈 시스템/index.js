// 모듈은 여러 번 재사용될 수 있다.

const {odd, even} = require('./var');
// 변수명은 require 대상의 return값과 다를 수 있다.
const checkNumer = require('./fun');

function checkStringOddEven(str) {
    if(str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumer(10));
console.log(checkStringOddEven('hello'));
