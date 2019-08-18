// 모든 메서드들 뒤에 Sync를 붙이면 동기식으로 동작한다.
// call back hell..

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

// Node 10 ~~ const fs = require('fs').promise;
// then , catch