// process 객체는에는 현재 실해중인 노드 프로그램 정보가 들어있다.
// global.process
// 데스크탑 프로그램을 만들 때 자주 사용한다.
console.log(process);
console.log(process.arch);
console.log(process.platform);
console.log(process.pid);
process.uptime();
// 노드 프로세스가 어디서 실행되고 있는지?
process.cwd();
// 노드가 설치된 경로
process.cpuUsage();
// process.exit()