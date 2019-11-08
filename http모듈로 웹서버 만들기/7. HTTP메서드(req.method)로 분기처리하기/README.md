# description

## Front 
```
    restFront.js
    restFront.css
    resetFront.html
```

## Back
```
    restServer.js
    delete.js
    get.js
    post.js
    put.js
```
## 1. front 과정
form 제출 시 XMLHttpRequest()의 `ajax 통신` 완료 후 페이지 렌더링을 하는 (getUser())역할을 수행한다.

getUser()에서 `모든 사용자 데이터`를 요청 완료후, box()함수를 사용하여 putBox, removeBox 함수 두개를 호출하여 
유저 정보 `수정` 및 `삭제` 버튼을 생성한다. 

이 버튼에도 모두 XMLHttpRequest로 설정 되어 통신완료 후 렌더링 기능이 포함된다.

## 2. back 과정
post (사용자 등록)
method=post url='/users'

get (사용자 정보)
method=get url='/users'

put (사용자 정보 수정)
method=put url='/users/[key]'

delete (사용자 정보 삭제)
method=delete url='/users/[key]'