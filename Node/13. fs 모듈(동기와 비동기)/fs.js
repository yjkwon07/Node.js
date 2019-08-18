// 브라우저에 자바스크립트는 파일을 접근 못하지만 
// node는 가능하다.
const fs = require('fs');
// 비동기
fs.readFile('./readme.txt', (err, data) =>{
    if(err) throw err;
    console.log(data);
    console.log(data.toString());
});
// 동기
// 1. call back hell 
fs.readFile('./readme.txt', (err, data) =>{
    if(err) throw err;
    console.log(data);
    console.log("1.",data.toString());
    fs.readFile('./readme.txt', (err, data) =>{
        if(err) throw err;
        console.log(data);
        console.log("2.",data.toString());
        fs.readFile( './readme.txt', (err, data) =>{
            if(err) throw err;
            console.log(data);
            console.log("3.", data.toString());
        });
    });
});

// 2. 동기 메서드
// fs 메서드들은 뒤에 Sync를 붙이면 동기식으로 작동한다.
// 잘 사용하지 않는다. 논블로킹을 사용한다.
// 데스크탑 프로그래밍을 사용하거나 한 번만 사용하는 로직이면 쓰지만,
// 대부분 잘 사용하지 않는다.
let da = fs.readFileSync('./readme.txt');
console.log("1.",da.toString());
da = fs.readFileSync('./readme.txt');
console.log("2.",da.toString());


// write 
// fs.writeFile( (err, data) => {})
// const data = fs.writeFileSync();
const data ="hello yj~~"
fs.writeFile('./wrtieme.txt', data,(err) => {
    if(err) throw err;
    fs.readFile('./wrtieme.txt', (err, data) => {
        if(err) throw err;
        console.log(data.toString());
    });
});