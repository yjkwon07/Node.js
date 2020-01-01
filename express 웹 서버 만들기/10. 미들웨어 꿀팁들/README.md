# 미들웨어 꿀팁들

## res.locals
render 매개변수에 인자 값을 보내지만 res.render안에 변수 설정하지 않고 따로 선언 할 수 있다. 

__다른 미들웨어에 템플릿 엔진 변수들을 사용할 수 있는 장점이다.__

__`express에 잠깐` 저장__

```javascript
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
```

## req.app.get() -> why use it that `req`?
__다른 라우터에서 사용 하기 위해__

req.app.get() -> app이라는 변수(app.js)가 다른 모듈(라우터 파일)에는 app이라는 변수를 선언하지 않았기 때문에 app.get()을 사용할 수 없다. 

그래서 req가 express의 app변수를 사용한다.

__하지만 모든 요청에 다 적용이 되기 때문에 (공유 변수라) 다소 보안에 취약하다.__

```javascript
  app.set('hello' , 'yjkwon07') // 변수 설정 시 
  app.get('hello') // 모든 미들웨어에서 사용이 가능하다.
```

__So How to do? 전체가 공유하지 않고 특정한 요청(객체)에서만 응답이 가기전까지만 남아 있고 싶다면__

req.password = ''; // 속성추가 

req.password; // 임시저장 변수

## 미들웨어 확장 
미들웨어 안에 미들웨어를 추가한다면 (req,res,next)를 추가하여 사용한다.
장점: 현재 미들웨어안에 다른 기능을 추가하면서 req, res, next 객체를 수정 및 확장이 가능하다.
__express.json__

```javascript
  app.use(express.json());
```
__after__
```javascript
  app.use((req, res, next) => {
      req.password = 'yjkwon07';
      express.json()(req, res, next);
  });
```

## res의 다른기능들을 추가 할 수 있다. 
미들웨어 앞에 따로 확장 하고 싶을 때
```javascript
  res.status();
  res.send();
  res.sendFile();
  res.json({hello : "hello"}); // json 형식
```
