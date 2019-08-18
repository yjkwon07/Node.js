# timer
## setTimeout, setInterval로 설정 / clearTimeout, clearInterval로 해제
```javascript
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
```

결과
```
    1초마다 실행
    1.5초 후 실행
    1초마다 실행
```

## setImmediate

`즉시 실행되는` setImmediate함수를 이벤트 루프로 보낼 때 사용

__쓰는 이유? : setinnediatem, setTimeout에 들어가는 콜백 함수는 이벤트 루프로 들어가서 `실행순서를 다르게 해줄 수 있다.`__
```javascript
    const im = setImmediate( () => console.log('즉시 실행'));
```
결과
```
    즉시 실행
```
바로 이벤트루프에 들어가는것을 볼 수 있다.

짝꿍~ clearImmediate(im); 