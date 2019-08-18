# os 모듈
## built-in-funciton
__os는 운영체제와 관련된 모듈이다.__
__데스크탑 프로그램 만들 때 사용__
```javascript
    const os = require('os');
    console.log(os.arch());
    console.log(os.platform());
    console.log(os.type());

    console.log(os.uptime()); // 운영체제가 시작한 흐름 시간.
    console.log(os.hostname()); // 컴퓨터 이름
    console.log(os.release()); // 버전
    console.log(os.homedir()); // home위치
    console.log(os.tmpdir()); // Tempdir위치
    console.log(os.freemem()); // 남은 용량
    console.log(os.totalmem()); // 전체 용량
```
```javascript
    console.log(os.cpus());
```

__많이사용 하긴함__

cpu의 코어를 파악하고 놀고있는 프로세스들을 

`for문으로 이용하여 multi-process를 이용하여` 

여러개의 노드를 실행시켜 `멀티스레드를 극복한다.`
