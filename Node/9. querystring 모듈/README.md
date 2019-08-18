# querystring 모듈
__url.parse의 query속성들 파싱하기__

```javascript
    const url = require('url');
    const querystring = require('querystring');

    const parsedUrl = url.parse('https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript');
    const query = querystring.parse(parsedUrl.query);
```

```javascript
    console.log("querystring.parse(): ", query);
    console.log("querystring.stringfy():", querystring.stringify(query)); // searchParms.toString과 유사하다.
```
결과
```
    querystring.parse():  [Object: null prototype] { page: '3', limit: '10', category: [ 'nodejs', 'javascript' ] }
    querystring.stringfy(): page=3&limit=10&category=nodejs&category=javascript
```