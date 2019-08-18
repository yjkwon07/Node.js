// 스트림은 버퍼의 흐름이기 때문에 여러 개의 스트림을 이어 
// 버퍼가 흘러가게 할 수 있다.
// 파일 복사하기
// 파일을 pipe를 계속해서 연결하여 압축 할 수 있다. 

// 파일 압축하기
const fs = require('fs');
const zlib = require('zlib');

const zlibStream = zlib.createGzip('utf8');
const readStream = fs.createReadStream('test.html', 'utf8');
const writeStream = fs.createWriteStream('writeme3.txt', 'utf-8');
readStream.pipe(zlibStream).pipe(writeStream);


readStream.on('end', () => {
    fs.createReadStream('writeme3.txt')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('inputABC.txt'));
});

// new style copy
const readStream_cp = fs.copyFile('./test.html', './writeme5.txt', (err) => {
    if (err) throw err;
});