// setTimeout, setInterval로 설정
// clearTimeout, clearInterval로 해제

const timeout = setTimeout( () => {
    console.log('1.5초 후 실행');
} , 1500);

const interval = setInterval( () => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout( () => {
    console.log('실행되지 않습니다.');
} , 3000);

setTimeout( () => {
    clearTimeout(timeout);
    clearInterval(interval);
}, 2500);

// 즉시 실행되는 setImmediate 함수를 이벤트 루프로 보낼 때 사용
// 쓰는 이유 setinnediatem, setTimeout에 들어가는 콜백 함수는 
// 이벤트 루프로 들어가서 실행순서를 다르게 해줄 수 있다.
const im = setImmediate( () => console.log('즉시 실행'));
// 짝꿍~ 
// clearImmediate(im); 