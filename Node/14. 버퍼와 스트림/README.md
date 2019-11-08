# 버퍼와 스트림

## 버퍼
큰 데이터를 버퍼공간에 작게 쪼개서 보낸다.

버퍼가 채워지면 데이터를 전송하고(Stream) 데이터를 받을 준비를 다시 한다.

버퍼들의 흐름이 스트림이라고 한다.

스트림은 이벤트 기반으로 동작한다.

data , end , error , 버퍼(청크)들이 들어올 때마다 data 이벤트가 발생한다.

## 스트림
스트림은 버퍼의 흐름이기 때문에 여러 개의 스트림을 이어 버퍼가 흘러가게 할 수 있다.

### readStream
```javascript
    const fs = require('fs');
    const readStream = fs.createReadStream('./test.html', {highWaterMark : 16}); /// highWaterMark: 몇 바이트 씩 ? 16bytes
    const data = [];

    readStream.on('data', (chunk) => {
        data.push(chunk);
        console.log('data', chunk, chunk.length);
    });

    // 하나로 합쳐서 출력 
    readStream.on('end', () => {
        console.log('end', Buffer.concat(data).toString() );
    });

    readStream.on('error', (err) =>{
        console.log('error', err);
    });
```

### writeStream
```javascript
    const writeStream = fs.createWriteStream('./writeme2.txt');
    // call back
    writeStream.on('finish', () => {
        console.log('파일 쓰기 완료');
    });
    writeStream.write('이 글을 쓴다. \n');
    writeStream.write('한 번더 쓴다.');
    writeStream.end();
```

## 파일 복사하기
```javascript
    // new style copy
    const readStream_cp = fs.copyFile('./test.html', './writeme5.txt', (err) => {
        if(err) throw err;
    });
```

## 파일 압축하기

스트림은 버퍼의 흐름이기 때문에 여러 개의 스트림을 이어 버퍼가 흘러가게 할 수 있다.

파일을 **`pipe를`** 계속해서 연결하여 압축 할 수 있다. 

```javascript
    const fs = require('fs');
    const zlib = require('zlib');

    const zlibStream = zlib.createGzip();
    const readStream = fs.createReadStream('test.html');
    const writeStream = fs.createWriteStream('writeme3.txt');
    readStream.pipe(zlibStream).pipe(writeStream);
```

## 파일 압축 해제
```javascript
    fs.createReadStream('writeme3.txt')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('inputABC.txt'));
```