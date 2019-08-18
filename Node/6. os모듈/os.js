// built-in-funciton
// os는 운영체제와 관련된 모듈이다.
// 데스크탑 프로그램 만들 때 사용
const os = require('os');
console.log(os.arch());
console.log(os.platform());
console.log(os.type());
// 운영체제가 시작한 흐름 시간.
console.log(os.uptime());
console.log(os.hostname());
console.log(os.release());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.freemem());
console.log(os.totalmem());
// *** 많이사용 하긴함 
// cpu의 코어를 파악하고 놀고있는 프로세스들을 
// for문으로 이용하여 multi-process를 이용하여 여러개의 노드를 
// 실행시켜 멀티스레드를 극복한다.
console.log(os.cpus());

