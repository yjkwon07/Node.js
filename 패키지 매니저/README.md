# 패키지 매니저

## 1. npm 설명과 패키지 만들기(package.json)

__rule__
```
    모듈: 노드 내장 모듈
    패키지: 남들이 만든 모듈
```

### 패키지는 꼬리를 무는 패키지를 사용하여 많은 패키지를 불러온다.
``` 
    npm install express
```

### --save-dev_
배포환경에는 안쓰고 개발할 때만 사용

__개발을 원할하게 만들어주는 패키지__
```
    npm install jset --save-dev 
```
`테스트용 패키지나` eslint같은 `코드 검사 툴이나` `개발모드에만 사용하는 웹팩 툴은` __`devDependencies에 넣으면 됩니다.`__

사실 이 구분은 웹서비스 개발 시 보다는 라이브러리 개발 시 더 중요합니다. 

다른 사람이 라이브러리를 받아갈 때 쓸데없는 devDependencies까지 받아가는 것을 막기 위함입니다.(용량 차지)

### 동시에 설치도 가능
```
    npm install morgan cookie-parser express-session
```

### 단축키
```
    install -> i
    --save-dev -> -D
    npm i nodemon -D

    --global -> -g
    npm i --global rimraf
```

__-g__

콘솔 명령처럼 동작  

프로그램 설치하거나 환경세팅할 때만 실행이 되지만, 모듈을 어디서나 사용이 가능하게끔 한다.

__npm 업데이트 할 때도 사용한다.__
```
    npm i -g npm 
```

## 2. SemVer 버전 이해하기
**`engine`** 은 이 패키지가 사용할 node와 npm 버전을 적는 곳이다.

모두 3자리

### major.minor.patch
```
    patch는 버그 수정
    minor는 신기능 추가
    major는 대규모 변화(고장 확률)
```

```
    ^(minor, patch 업데이트)
    ~(patch 업데이트)
    부등호(부등호의 의미) >= 크거나 같으면 된다.
    X.X.X(X는 모든 숫자를 의미)
```

## 3. npm 명령어 알아보기 
__버전을 정할 수 있다.__
```
    npm i express@4.14.0
```

__새로운 버전이 있는지 체크해 줄 수 있다.__
```
    npm outdated

    npm update epxpress -> 하나만 업데이트
    npm update-> all ( ^이 붙어 있는 애들만 (마이너랑, 패치버전이 있을 때 만) )
```

__삭제__
```
    npm remove morgan
    remove -> rm(단축키) 
```

__패키지 검색__ 
```
    npm search express
```

__자세하게 보기__
```
    npm info express-jwt
```

__내 패키지가 익스프레스가 어떤 디펜던시가에설치 되었는지 알 수 있다.__
```
    npm ls express
```

__패키지 배포__ 
```
    npm adduser
    npm whoami
```

__버전 올리기__
```
    npm version 1.0.8
    npm version patch 
    npm version minor
    npm version major
```

## 4. 패키지 배포하기
```
    npm publish 
```

__삭제__

__24시간이 지나면 지울 수 없다.__
```
    npm unpublish npmtest-8888 --force
```