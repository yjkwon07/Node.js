# 기타 fs 메서드

## fs.access('파일경로' , 권한)

__권한__
```
    F_OK(존재 여부)
    R_OK(읽기 여부),
    W_OK(쓰기 여부)
```

[참고](https://nodejs.org/api/fs.html#fs_file_system_flags ) 

__mkdir, open, rename__

```javascript
    const fs = require('fs');
    fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
        if(err) {
            if(err.code === 'ENOENT') {
                console.log('폴더 없음');
                fs.mkdir('./folder', (err) => {
                    if(err) throw errr;
                    console.log('폴더 만들기 성공');
                    fs.open('./folder/file.js' , 'w', (err, fd) => {
                        if(err) throw err;
                        console.log('빈 파일 만들기 성공', fd);
                        fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
                            if(err) throw err;
                            console.log('파일 이름 변경 성공');
                        })
                    })
                })
            }
            else {
                console.log('이미 폴더 존재');
            }
        }
    });
```
## readdir
모든 메서드들 뒤에 Sync를 붙이면 동기식으로 동작한다.(call back hell..)

__unlink, rmdir__
```javascript
    const fs = require('fs');

    fs.readdir('./folder', (err, dir) => {
        if (err) throw err;
        console.log('폴더 내용 확인', dir);
        fs.unlink('./folder/newFile.js', (err) => {
            if (err) throw errr;
            console.log('파일 삭제 성공');
            fs.rmdir('./folder', (err) => {
                if (err) throw err;
                console.log('폴더 삭제 성공');
            });
        });
    });
```

```
    Node 10 부터 promise 지원 (fs) 
    const fs = require('fs').promise;
    then , catch 사용 할 수 있다.
```