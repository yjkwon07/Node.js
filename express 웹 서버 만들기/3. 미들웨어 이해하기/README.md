# 3. 미들웨어 이해하기

`app.set` 익스프레스 설정 또는 값 저장

`app.use` (미들웨어 장착)

`요청(req)` -> `미들웨어들(app.use)` -> `next()`

[라우트 요청 참고](https://luckyyowu.tistory.com/346)

__request가 영향을 app.use에 영향을 받는다.__

app.use 안의 req, res로 요청과 응답을 조작할 수 있다.

`next로` 다음 미들웨어로 넘어간다.

```javascript
   app.use( (req, res, next)=> {
      console.log('첫 번째 미들웨어');
      next();
   });
```

- 미들웨어에서는 `next`를 호출해 다음 미들웨어로 넘어가거나 `res.send` 등으로 응답을 보낸다.

## 라우터
- app.get app.post등은 GET, POST 요청들에만 걸리는 미들웨어를 장착한다.
- 주소가 붙으면 그 주소와 일치하는 요청만 걸린다.

__use는 모든 경우에 다 걸린다.__

- **`use는 공통 미들웨어`**
  - get, post, put, patch, delete등은 **`라우팅 미들웨어`** 를 장착한다.
  - (일치하는 경우만 실행)
  - 응답(res)

### Q: 🤔
어떠한 경우에 라우팅 미들웨어가 아닌 미들웨어를 사용하나요?

localhost:3000 으로 접속했다고 해도 이 메인페이지에서 미들웨어를 어떤 목적으로 사용하는지 궁금합니다.

라우팅 미들웨어는 어떠한 경로를 갔으니 그 경로에서 무엇을 실행하기 위해 사용하는 것은 알겠는데 기본 미들웨어는 궁금합니다!

### A: 😃
라우팅 미들웨어 하나에서 다 처리해도 되지만 라우터마다 공통되는 로직들은 미들웨어로 따로 만들어서 재사용하게 됩니다. 

app.use나 router.use가 공통 미들웨어를 장착하는 함수입니다.

**`res.응답메서드`** 는 한 번만 쓸 수 있습니다.

res.send 후에 next()를 하면 다음 미들웨어에서 또 res.send를 하게 됩니다. 

next를 할 거면 next만 하고, res.send를 할 거면 더는 next를 호출해서는 안 됩니다.

## Express?
[Express 처리 흐름](https://stylishc.tistory.com/120)
