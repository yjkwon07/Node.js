// 큰 데이터를 버퍼공간에 작게 쪼개서 보낸다.
// 버퍼가 채워지면 데이터를 전송하고(Stream) 데이터를 받을 준비를 다시 한다.
// 버퍼들의 흐름이 스트림이라고 한다.
// 스트림은 이벤트 기반으로 동작한다.
// data , end , error , 버퍼(청크)들이 들어올 때마다 data 이벤트가 발생한다.

const fs = require('fs');
// 몇 바이트 씩 ? 16bytes
const readStream = fs.createReadStream('./test.html', {highWaterMark : 16});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});
// 하나로 합쳐서 출력 
readStream.on('end' , () => {
    console.log('end', Buffer.concat(data).toString() );
});

readStream.on('error' , (err) =>{
    console.log('error', err);
});


const writeStream = fs.createWriteStream('./writeme2.txt');
// call back
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});
writeStream.write('이 글을 쓴다. \n');
writeStream.write('한 번더 ㅆ느다.');
writeStream.end();
