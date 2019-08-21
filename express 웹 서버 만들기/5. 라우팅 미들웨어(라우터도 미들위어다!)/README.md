# 5. 라우팅 미들웨어(라우터도 미들웨어다!!)
미들웨어를 한 번에 연장 할 수 있다 app.use( )

파일 하나가 길어지면 너무 지저분해 진다... 

```javascript
    app.use( (req, res, next) => {
            console.log("첫 번째 미들웨어");
            next();
        }, (req, res, next ) => {
            console.log("두 번째 미들웨어");
            next();
        }
    );
```

## 라우터들을 분리 할 수 있다.
router를 app.js에서 분리 할 수 있다.

router를 임포트 하여 router.js에 router들을 정의 한다.

## require 경로에서 index 생략 가능하다.
```javascript
    require('./routes/index')
    require('./routes')
```

```javascript
    app.use('./abc') + router.get('/df')
    // = GET/abc/df
    app.use('/') + router.post('/')
    // = POST/  
```