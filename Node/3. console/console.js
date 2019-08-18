// console 객체 안에 디버깅을 도와주는 많은 메서드가 있다.
// console.time('인자')
// console.timeEnd('인자')
// 인자는 같아야 한다.
const string ='abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside: { 
            key : 'value',
        },
    },
};

console.time('전체시간');

console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요');

// dir *****객체 로깅
console.dir(obj, {colors: false, depth: 2}); // inside까지 표현해 주세요
console.dir(obj, {colors: true,  depth: 1}); // outside 까지만 표현

console.time('시간 측정');
for(let i = 0; i < 100000000; i++){
    continue;
}
// 함수 호출 순서, 위치를 추적 한다.*****
function b() {
    console.trace('에러 위치 추적');
}
function a() {
    b();
}
a();

console.timeEnd('시간 측정');
console.timeEnd('전체시간');
