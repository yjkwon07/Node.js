# 4. 유명한 미들웨어들 (morgan, body-parser, cookie-parser, express-session, flash)
 
남들이 만든 미들웨어를 쓸 수 있고 express내에서 내장된 미들웨어들을 쓸 수 있다.

[참고](https://sjh836.tistory.com/154)

## morgan('dev')
    요청을 무었을 했는지, 응답을 무었을 했는지 
    res.send() 후에 일어난다. 즉, 요청이 끝났을 때 로그가 찍힌다.

## body-parser => express 내장(built-in)이 되었음
    req.on('data') / req.on('end')
     -> data를 bodyParser가 해석 
    bodyParser.json()
    bodyParser.urlencoded() 
    하지만 express가 body-parser 기능이 내장됨 (bodyParser 필요 없어짐)
  
## express.static
    static 미들웨어는 정적파일용 라우터 역할을 한다.
    원래는 next를 안 한다.
    하지만, 파일을(css, html....) 못 찾으면 next를  한다.
    그래서 최대한 위로 올린다.
    즉, 파일을 찾으면 그 자리에서 라우팅을 멈춘다.
    morgan 다음으로 두는 편이다.

## cookie-parser
    쿠키를 활성화
    쿠키가 클라이언트에 저장
    쿠키가 위조된 쿠키인지 비밀키(secret code)가 필요하다.
    프론트가 서버로 쿠키를 보내줄 때 시크릿코드와 대조한다.

## express-session
    cookie-parser나 session은 이제 독립적으로 이루어졌지만 미들웨어 순서가 중요하다.
    
### session
    메모리 세션을 활성화 
    옵션도 넣을 수 있다 
        resave : 세션 객체에 수정 사항이 없더라도 저장을 할지 
        saveUnitialized : 처음의 빈 세션 객체라도 저장을 할지
        httpOnly : http로 할지
        secure : https로 사용할지 

## connect-flash

### flash()
    로그인 실패시 -> 일회성 메시지를 표시
