// 복호화 만들기
// 열쇠가 노출되면 안된다.!!!!
const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
cipher.update('비밀번호', 'utf8', 'base64');
const result = cipher.final('base64');
console.log('암호', result);

//cretaeCipher utf8  평문을 base64 암호문으로 
// createDecipher base64 암호문을 utf8 평문으로
const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
decipher.update(result, 'base64', 'utf8');
// 암호화 복호화 마무리 
const result2 = decipher.final('utf8');
console.log('평문', result2);