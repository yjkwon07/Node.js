// fs.access('파일경로' , 권한)
// 권한은 F_OK(존재 여부)
// R_OK(읽기 여부),
// W_OK(쓰기 여부)

const fs = require('fs');

// 'w' 나 'r' , 'a' 같은것은 
// https://nodejs.org/api/fs.html#fs_file_system_flags 

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