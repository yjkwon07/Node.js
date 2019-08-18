# fs 모듈
브라우저에 자바스크립트는 파일을 접근 못하지만 

`node는 가능하다.`
## read, write

__비동기__ 방식으로 실행 순서가 모두 다르다.

__read__
```javascript
    const fs = require('fs');
    fs.readFile('./readme.txt', (err, data) =>{
        if(err) throw err;
        console.log(data);
        console.log(data.toString());
    });
```

__write__
```javascript
const data = "hello yj~~";
fs.writeFile('./wrtieme.txt', data, (err) => {
    if(err) throw err;
    fs.readFile('./wrtieme.txt', (err, data) => {
        if(err) throw err;
        console.log(data.toString());
    });
});
```

## 1. 동기
__call back hell!!!__ 
```javascript
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
```

## 2. 동기 메서드
fs 메서드들은 뒤에 Sync를 붙이면 동기식으로 작동한다.

잘 사용하지 않는다. __논블로킹을 사용한다.__

__콜백을 사용하지 못한다.__ 

데스크탑 프로그래밍을 사용하거나 한 번만 사용하는 로직이면 쓰지만, 대부분 잘 사용하지 않는다.
```javascript
let da = fs.readFileSync('./readme.txt');
console.log("1.",da.toString());
da = fs.readFileSync('./readme.txt');
console.log("2.",da.toString());
```

## write 
```javascript
fs.writeFile( (err, data) => {})
const data = fs.writeFileSync();
```
