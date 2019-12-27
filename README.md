# Node.js
- [Node Basic](https://github.com/yjkwon07/Node.js#node-basic)
- [http모듈로 웹 서버 만들기](https://github.com/yjkwon07/Node.js#http%EB%AA%A8%EB%93%88%EB%A1%9C-%EC%9B%B9-%EC%84%9C%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [패키지 매니저](https://github.com/yjkwon07/Node.js#%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%A4%EB%8B%88%EC%A0%80)
- [express 웹 서버 만들기](https://github.com/yjkwon07/Node.js#express-%EC%9B%B9-%EC%84%9C%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [MySQL & Sequelize](https://github.com/yjkwon07/Node.js#mysql--sequelize)
- [MongoDB & Mongoose](https://github.com/yjkwon07/Node.js#mongodb--mongoose)
  
## Node Basic
- [노드 모듈 시스템](https://github.com/yjkwon07/Node.js/tree/master/Node/1.%20%EB%85%B8%EB%93%9C%EB%AA%A8%EB%93%88%20%EC%8B%9C%EC%8A%A4%ED%85%9C)
- [global 객체](https://github.com/yjkwon07/Node.js/tree/master/Node/2.%20global)
- [console 객체](https://github.com/yjkwon07/Node.js/tree/master/Node/3.%20console)
- [타이머(setTimeout, setInterval, setImmediate)](https://github.com/yjkwon07/Node.js/tree/master/Node/4.%20%ED%83%80%EC%9D%B4%EB%A8%B8(setTimeout%2C%20setInterval%2C%20setImmediate))
- [__filename, __dirname, process](https://github.com/yjkwon07/Node.js/tree/master/Node/5.%20__filename%2C%20__dirname%2C%20process)
- [os 모듈](https://github.com/yjkwon07/Node.js/tree/master/Node/6.%20os%EB%AA%A8%EB%93%88)
- [path 모듈](https://github.com/yjkwon07/Node.js/tree/master/Node/7.%20path%20%EB%AA%A8%EB%93%88)
- [url 모듈](https://github.com/yjkwon07/Node.js/tree/master/Node/8.%20url%EB%AA%A8%EB%93%88)
- [querystring 모듈](https://github.com/yjkwon07/Node.js/tree/master/Node/9.%20querystring%20%EB%AA%A8%EB%93%88)
- [crypto 단방향 암호화(해시)](https://github.com/yjkwon07/Node.js/tree/master/Node/10.%20crypto%20%EB%8B%A8%EB%B0%A9%ED%96%A5%20%EC%95%94%ED%98%B8%ED%99%94(%ED%95%B4%EC%8B%9C))
- [crypto 양방향 암호화](https://github.com/yjkwon07/Node.js/tree/master/Node/11.%20crypto%20%EC%96%91%EB%B0%A9%ED%96%A5%20%EC%95%94%ED%98%B8%ED%99%94)
- [util 모듈(deprecate, promisify)](https://github.com/yjkwon07/Node.js/tree/master/Node/12.%20util%20%EB%AA%A8%EB%93%88(deprecate%2C%20promisify))
- [fs 모듈(동기와 비동기)](https://github.com/yjkwon07/Node.js/tree/master/Node/13.%20fs%20%EB%AA%A8%EB%93%88(%EB%8F%99%EA%B8%B0%EC%99%80%20%EB%B9%84%EB%8F%99%EA%B8%B0))
- [버퍼와 스트림](https://github.com/yjkwon07/Node.js/tree/master/Node/14.%20%EB%B2%84%ED%8D%BC%EC%99%80%20%EC%8A%A4%ED%8A%B8%EB%A6%BC)
- [기타 fs 메서드](https://github.com/yjkwon07/Node.js/tree/master/Node/15.%20%EA%B8%B0%ED%83%80%20fs%20%EB%A9%94%EC%84%9C%EB%93%9C)
- [events 모듈](https://github.com/yjkwon07/Node.js/tree/master/Node/16.%20events%20%EB%AA%A8%EB%93%88)
- [예외 처리하기](https://github.com/yjkwon07/Node.js/tree/master/Node/17.%20%EC%98%88%EC%99%B8%20%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)

**[위로](https://github.com/yjkwon07/Node.js#nodejs)**

## http모듈로 웹 서버 만들기
- [http모듈, localhost, 포트](https://github.com/yjkwon07/Node.js_go/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/1.%20http%EB%AA%A8%EB%93%88%2C%20localhost%2C%20%ED%8F%AC%ED%8A%B8)
- [응답으로 파일 읽어 보내기](https://github.com/yjkwon07/Node.js_go/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/2.%20%EC%9D%91%EB%8B%B5%EC%9C%BC%EB%A1%9C%20%ED%8C%8C%EC%9D%BC%20%EC%9D%BD%EC%96%B4%20%EB%B3%B4%EB%82%B4%EA%B8%B0)
- [쿠키 설정하기, req.url](https://github.com/yjkwon07/Node.js_go/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/3.%20%EC%BF%A0%ED%82%A4%20%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0%2C%20req.url)
- [라우터 분기 처리와 쿠키](https://github.com/yjkwon07/Node.js_go/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/4.%20%EB%9D%BC%EC%9A%B0%ED%84%B0%20%EB%B6%84%EA%B8%B0%20%EC%B2%98%EB%A6%AC%EC%99%80%20%EC%BF%A0%ED%82%A4)
- [메모리 세션 구해보기](https://github.com/yjkwon07/Node.js_go/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/5.%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%EC%84%B8%EC%85%98%20%EA%B5%AC%ED%95%B4%EB%B3%B4%EA%B8%B0)
- [REST API의 개념과 프론트 코드 설명](https://github.com/yjkwon07/Node.js_go/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/6.%20REST%20API%EC%9D%98%20%EA%B0%9C%EB%85%90%EA%B3%BC%20%ED%94%84%EB%A1%A0%ED%8A%B8%20%EC%BD%94%EB%93%9C%20%EC%84%A4%EB%AA%85)
- [HTTP메서드(req.method)로 분기처리하기](https://github.com/yjkwon07/Node.js_go/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/7.%20HTTP%EB%A9%94%EC%84%9C%EB%93%9C(req.method)%EB%A1%9C%20%EB%B6%84%EA%B8%B0%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)
- [라우터 리팩토링](https://github.com/yjkwon07/Node.js/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/9.%20%EB%9D%BC%EC%9A%B0%ED%84%B0%20%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81)
- [http, http2](https://github.com/yjkwon07/Node.js/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/10.%20http%2C%20http2)
- [cluster로 멀티 프로세싱 하기](https://github.com/yjkwon07/Node.js/tree/master/http%EB%AA%A8%EB%93%88%EB%A1%9C%20%EC%9B%B9%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/11.%20cluster%EB%A1%9C%20%EB%A9%80%ED%8B%B0%20%ED%94%84%EB%A1%9C%EC%84%B8%EC%8B%B1%20%ED%95%98%EA%B8%B0)
- [http 모듈을 사용한 CRUD](https://github.com/yjkwon07/node_http_module)

**[위로](https://github.com/yjkwon07/Node.js#nodejs)**

## 패키지 매니저 
- [패키지 매니저](https://github.com/yjkwon07/Node.js/tree/master/%ED%8C%A8%ED%82%A4%EC%A7%80%20%EB%A7%A4%EB%8B%88%EC%A0%80)

**[위로](https://github.com/yjkwon07/Node.js#nodejs)**

## express 웹 서버 만들기 
- [express-generator, npm scripts, bin](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/1.%20express-generator%2C%20npm%20scripts%2C%20bin)
- [express app.js 이해하기](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/2.%20express%20app.js%20%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
- [미들웨어 이해하기](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/3.%20%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4%20%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
- [유명한 미들웨어들](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/4.%20%EC%9C%A0%EB%AA%85%ED%95%9C%20%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4%EB%93%A4)
- [라우팅 미들웨어(라우터도 미들위어다!)](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/5.%20%EB%9D%BC%EC%9A%B0%ED%8C%85%20%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4(%EB%9D%BC%EC%9A%B0%ED%84%B0%EB%8F%84%20%EB%AF%B8%EB%93%A4%EC%9C%84%EC%96%B4%EB%8B%A4!))
- [404처리 미들웨어와 에러 처리 미들웨어](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/6.%20404%EC%B2%98%EB%A6%AC%20%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4%EC%99%80%20%EC%97%90%EB%9F%AC%20%EC%B2%98%EB%A6%AC%20%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4)
- [pug 기본 문법](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/7.%20pug%20%EA%B8%B0%EB%B3%B8%20%EB%AC%B8%EB%B2%95)
- [pug 심화(조건, 반복, include, laydout)](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/8.%20pug%20%EC%8B%AC%ED%99%94(%EC%A1%B0%EA%B1%B4%2C%20%EB%B0%98%EB%B3%B5%2C%20include%2C%20laydout))
- [EJS 문법](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/9.%20EJS%20%EB%AC%B8%EB%B2%95)
- [미들웨어 꿀팁들](https://github.com/yjkwon07/Node.js_go/tree/master/express%20%EC%9B%B9%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0/10.%20%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4%20%EA%BF%80%ED%8C%81%EB%93%A4)

**[위로](https://github.com/yjkwon07/Node.js#nodejs)**

## MySQL & sequelize
- [MySQL & sequelize](https://github.com/yjkwon07/Node.js/tree/master/MySQL_Sequelize)

**[위로](https://github.com/yjkwon07/Node.js#nodejs)**

## MongoDB & Mongoose
- [MongoDB & Mongoose](https://github.com/yjkwon07/Node.js/tree/master/MongoDB)

**[위로](https://github.com/yjkwon07/Node.js#nodejs)**
