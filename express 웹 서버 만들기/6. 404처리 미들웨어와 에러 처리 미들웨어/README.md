# 6. 404 처리 미들웨어와 에러 처리 미들웨어 
404처리 미들웨어와 에러 처리 미들웨어를 끝에 둔다.

__next도 하지 않고 res 메서드도 사용하지 않으면 클라이언트는 계속 기다리게 된다.(무한로딩) => (실제로는 timeout될 때 까지)__

## 404 NOT FOUND -> client
__express에서는 writeHead(404 대신 status(404)를 쓴다.)__
```javascript
    app.use( (req, res ,next) => {
        res.status(404).send("NOT FOUND");
    });
```

## 500 ERROR -> SERVER
```javascript
    app.use( (err, req, res ,next) => {
        console.log(err);
        res.status(500).send("NOT FOUND");
    });
```

## try- catch문을 활용
next(err)를 하면 다음 미들웨어를 다 건너뛰고 에러처리 미들웨어로 이동한다.

__🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔__

1. 라우터에서 만약 next를 하지 않았다면 404 핸들러에 요청이 도달하지 않습니다. 
2. 404 핸들러에 요청이 도달하는 이유는 요청이 라우터에 아무것도 해당되지 않았기 때문입니다. 
3. __404 핸들러는 사실 에러 핸들러는 아니고__ 마지막 최종적으로 라우팅이 처리되는 곳입니다. (if-elseif-else 문의 else같은 역할입니다.)
- 여기서는 404에러 말고 다른 것을 응답해도 되지만 웹 표준 상 404를 응답하게 되어있습니다.
4. next(err)처럼 next 안에 에러를 넣어야 에러가 디텍팅되고 에러 처리 미들웨어로 바로 넘어갑니다. 
5. next(‘Not Found’)도 에러로 처리되고요. 실무에서는 에러 처리 미들웨어가 다음과 같은 식입니다.
```javascript
    app.use(function(err, req, res, next){
        if (err.name === '무슨무슨에러') {
            // 처리
        } else if (err.name === '무슨에러') {
            // 처리
        } else {
            res.status(500).send(‘Server Error’);
        }
    });
```