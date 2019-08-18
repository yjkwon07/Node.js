// old style
const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.inflearn.com/course/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);

console.log("querystring.parse(): ", query);
// searchParms.toString과 유사하다.
console.log("querystring.stringfy():", querystring.stringify(query));