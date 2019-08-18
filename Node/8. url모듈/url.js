const url = require('url');

// WHATWG 방식(url.URL)은 search 처리가 편리하다.
// 파라미터 찾기가 좋다. 
const URL = url.URL;
const myURL = new URL('https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

console.log('--------------------------------------');
// 기존 방식(url.parse)은 호스트(www.inflearn.com)가 없을 때도 쓸 수 있다.
// 주소가 /hello?page=10 일 때 도메인 주소가 없을 때 사용
const parsedUrl = url.parse('https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript');
console.log('url.parse(): ', parsedUrl); 
console.log('url.query:', parsedUrl.query);

console.log('--------------------------------------');
// 노드 searchParams의 메서드는 나중에 사용되는 FormData나 URLSearchParams(front)객체에도 비슷하게 쓰인다.
const  _myURL = new URL('https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParms:', _myURL.searchParams);
console.log('searchParams.getAll():', _myURL.searchParams.getAll('category'));
console.log('searchParams.get():', _myURL.searchParams.get('limit'));
console.log('searchParams.has():', _myURL.searchParams.has('page'));

console.log('searchParams.keys():', _myURL.searchParams.keys());
console.log('searchParams.values():', _myURL.searchParams.values());

// append는 값 추가(기존 값 보존)
_myURL.searchParams.append('filter', 'es3');
_myURL.searchParams.append('filter', 'es5');
console.log(_myURL.searchParams.getAll('filter'));
console.log('searchParams.toString():' , _myURL.searchParams.toString());

// set은 기존 값 초기화 후 수정 (es3 , es5값이 사라짐)
_myURL.searchParams.set('filter', 'es6');
console.log(_myURL.searchParams.getAll('filter'));
console.log('searchParams.toString():' , _myURL.searchParams.toString());

_myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():' , _myURL.searchParams.toString());
_myURL.search = _myURL.searchParams.toString();
//page=3&limit=10&category=nodejs&category=javascript