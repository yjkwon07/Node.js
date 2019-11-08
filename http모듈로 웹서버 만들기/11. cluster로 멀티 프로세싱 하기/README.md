# cluster

**코어를 하나로 하는 경우는 없다..**

싱글스레드인 노드는 코어 하나만 사용하네.. 너무 아까워... 

**그래서 클러스터링!!** 노는 노드들을 사용

**`cluster에는`** master(관리자) 프로세스와 worker(일꾼) 프로세스(실제로 일 하는 사람들)가 있다.

**`cluster.fork()`** 가 워커를 만든다.

**`process.pid`** 로 현재 프로세스(마스터든 워커든)의 아이디를 가져올 수 있다.

```javascript
    const http = require('http');
    const cluster = require('cluster');
    const os = require('os');
    const numCPUs = os.cpus().length;

    for(let i = 0; i < numCPUs; i++){
        
    }

    if(cluster.isMaster) {
        console.log('마스터 프로세스 아이디', process.pid);
        for(let i = 0; i < numCPUs; i++){
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(worker.process.pid, '워커가 종료 되었습니다.');
        });
    } else {
        http.createServer( (req, res) => {
            res.end('http server');
            setTimeout( () => {
                process.exit(1);
            }, 1000);
        }).listen(8000);
        console.log(process.pid, '워커가 실행');
    }
```