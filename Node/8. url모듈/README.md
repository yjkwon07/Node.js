# url 모듈
## url.URL
기존 방식의 주소 체계 WHATWG 방식(url.URL)은 search 처리가 편리하다.

파라미터 찾기가 좋다. 
```javascript
    const url = require('url');

    const URL = url.URL;
    const myURL = new URL('https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript'); // url 인스턴스 생성
    console.log('new URL():', myURL);
    console.log('url.format():', url.format(myURL));

    console.log('--------------------------------------');
```
결과
```
    new URL(): URL {
    href:
    'https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript',
    origin: 'https://www.inflearn.com',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'www.inflearn.com',
    hostname: 'www.inflearn.com',
    port: '',
    pathname: '/course/',
    search: '?page=3&limit=10&category=nodejs&category=javascript',
    searchParams:
    URLSearchParams {
    'page' => '3',
    'limit' => '10',
    'category' => 'nodejs',
    'category' => 'javascript' },
    hash: '' }

    url.format(): https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript
```

## url.parse
기존 방식(url.parse)은 호스트(www.inflearn.com)가 없을 때도 쓸 수 있다.

주소가 /hello?page=10 일 때 __도메인 주소가 없을 때 사용__
```javascript
    const parsedUrl = url.parse('https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript');
    console.log('url.parse(): ', parsedUrl); 
    console.log('url.query:', parsedUrl.query);

    console.log('--------------------------------------');
```
결과
```
    url.parse():  Url {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.inflearn.com',
    port: null,
    hostname: 'www.inflearn.com',
    hash: null,
    search: '?page=3&limit=10&category=nodejs&category=javascript',
    query: 'page=3&limit=10&category=nodejs&category=javascript',
    pathname: '/course/',
    path:
    '/course/?page=3&limit=10&category=nodejs&category=javascript',
    href:
    'https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript' }

    url.query: page=3&limit=10&category=nodejs&category=javascript
```

## serachParams
### getAll, get, has, keys, values
노드 searchParams의 메서드는 나중에 사용되는 FormData나 URLSearchParams(front)객체에도 비슷하게 쓰인다.
```javascript
    const  _myURL = new URL('https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript');
    console.log('searchParms:', _myURL.searchParams);
    console.log('searchParams.getAll():', _myURL.searchParams.getAll('category')); 
    console.log('searchParams.get():', _myURL.searchParams.get('limit')); 
    console.log('searchParams.has():', _myURL.searchParams.has('page')); 

    console.log('searchParams.keys():', _myURL.searchParams.keys()); 
    console.log('searchParams.values():',  _myURL.searchParams.values()); 
```
결과
```
    searchParms: URLSearchParams {
    'page' => '3',
    'limit' => '10',
    'category' => 'nodejs',
    'category' => 'javascript' }
    searchParams.getAll(): [ 'nodejs', 'javascript' ]
    searchParams.get(): 10
    searchParams.has(): true
    searchParams.keys(): URLSearchParams Iterator { 'page', 'limit', 'category', 'category' }
    searchParams.values(): URLSearchParams Iterator { '3', '10', 'nodejs', 'javascript' }
```

## append, set, delete, toString
`append`는 값 추가(기존 값 보존)

`set`은 기존 값 초기화 후 수정 (es3 , es5값이 사라짐)

```javascript
_myURL.searchParams.append('filter', 'es3'); 
_myURL.searchParams.append('filter', 'es5');
console.log(_myURL.searchParams.getAll('filter'));
console.log('searchParams.toString():' , _myURL.searchParams.toString());

_myURL.searchParams.set('filter', 'es6');
console.log(_myURL.searchParams.getAll('filter'));
console.log('searchParams.toString():' , _myURL.searchParams.toString());

_myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():' , _myURL.searchParams.toString());
_myURL.search = _myURL.searchParams.toString();
```
결과
```
[ 'es3', 'es5' ]
searchParams.toString(): page=3&limit=10&category=nodejs&category=javascript&filter=es3&filter=es5

[ 'es6' ]
searchParams.toString(): page=3&limit=10&category=nodejs&category=javascript&filter=es6

[]
searchParams.toString(): page=3&limit=10&category=nodejs&category=javascript
```