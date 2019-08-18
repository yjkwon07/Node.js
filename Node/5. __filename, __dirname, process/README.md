# __filename, __dirname
```javascript
console.log(__filename); //현재 파일 경로를 알려준다.
console.log(__dirname); // 현재 파일이 있는 경로를 알려준다.
```
# process
__데스크탑 프로그래밍을 제작할 때 많이 사용한다.__

process 객체는에는 __`현재 실해중인 노드 프로그램 정보가`__ 들어있다.
`global.process`
```javascript
    console.log(process);
    console.log(process.arch); // x64
    console.log(process.platform); // win32
    console.log(process.pid); // 16352
    process.uptime(); // 노드프로그램 실행시킨 후 얼마나 지났는지?

    process.cwd(); // 노드 프로세스가 어디서 실행되고 있는지?
    process.cpuUsage(); // cpu 사용량
    process.exit() // 프로세스 종료
```