# 예외 처리하기

__node는 싱글스레드!!!!__

여기서 try catch로 설정하여 계속해서 함수 호출 할 수 있다.(권장하지는 않다.) -> 근본적인 원인을 해결해라

하지만 async/await처럼 어쩔 수 없이 try/catch를 써야하는 경우도 있다.

```javascript
    setInterval( () => {
        console.log('시작');
        try{
            throw new Error('서버를 고장내주마');
        } catch(error) {
            console.log(error);
        }
    }, 1000);
```

__node 내장 메서드를 사용하여 에러가 발생해도 try catch가 자동으로 관리한다.__
```javascript
    setInterval( () => {
        false.unlink('./asdadf.js', (err) => {
            if(err) {
                console.log('시작');
                console.log(err);
                console.log('끝');
            }
        });
    }, 1000);
```

__1초에 에러가 발생하여 그다음 2초후 콜백이 호출이 되지 않는다.__
```javascript
    setInterval( () => {
        throw new Error('서버를 고장내주마!!!');
    }, 1000);
    setInterval( () => {
        console.log('실행됩니다.');
    }, 2000);
```

## 이벤트 리스너 활용 
uncaughtException => catch를 안잡아둔 에러를 한 번에 해결 so. 안 죽고 다음 실행

__but, 모든 에러를 다 기록이 되지만, 그 에러가  계속 나기 때문에 근본적인 해결책이 아니다.__ 

uncaughtException에 의존하지 말고 근본적인 에러의 원인을 해결해야 한다.
```javascript
    process.on('uncaughtException', (err) => {
        console.err('예기치 못한 에러', err);
        // 서버를 복구하는 코드 -> 실행이 되는게 보장이 되지는 않아서 
        // 권장사항은 아님
    });
```
