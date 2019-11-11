# MySQL_Sequelize

## 1. 시퀄라이즈(sequelize)와 MySQL 설치
시퀄라이즈는 다양한 디비를 지원합니다. 

따라서 기본적으로 모든 디비 모듈을 포함하고 있기 보다는 사용자가 자신이 원하는 모듈을 따로 설치하도록 한 것입니다.

    npm i sequelize mysql2
    npm i -g sequelize-cli 
    sequelize init


## 2. 워크벤치 소개와 시퀄라이즈로 데이터베이스 만들기
   
데이터베이스 스키마 생성

    sequelize db:create

```javascript
    // 환경변수 
    // 실서비스에서 배포 할 때 production => 많은 패키지들이 배포용으로 바뀐다.
    const env = process.env.NODE_ENV || 'development';
    const config = require('../config/config.json')[env];
```

## 3. 시퀄라이즈 테이블 정의하기

**type: 자료형**
    
    allowNull: NULL allow?
    defaultValue: 기본값
    unizue: 고유값 여부
    comment: 컬럼 설명
    primaryKey: 기본키 여부(id 대체)

**자료형: STRING(글자수)**

    INTEGER, FLOAT, TEXT, DATE, BOOLEAN

**Mysql setting**

**timestamps: false**

    생성일을 알아서 기록?
    생성일은 직접 받을거니깐
    timestamps는 시퀄라이즈 보고 받지 말라고

**underscored: true**
        
    Mysql은 스네이크 형식을 쓸거야 true
    JS는 캐멀 케이스지만 false

## 4. 시퀄라이즈 관계 설정하기
    
    1대1 (hasOne, belongsTo)    
    1대다 (hasMany, belongsTo)
    다대다(belongsToMany)

```javascript
    // 인스터스 화 
    const sequelize = new Sequelize(config.database, config.username, config.password , config);
    const db = {};

    // db객체 모듈화
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    // table connect 
    db.User = require('./user')(sequelize, Sequelize);
    db.Comment = require('./comment')(sequelize, Sequelize);

    // 1 : N 
    db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
    db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey: 'id'});

    moduels.exports = db;
```

## 5. 라우터 만들기(req.params)
/commetns/:id처럼 :파라미터로 주소에서 변하는 부분들을 가져올 수 있다.

(req.params.파라미터)

    /comments/hello
    /commennts/:id 
두 라우터가 있다면, 와일드 카드 라우터가 더 뒤에 있어야 한다.

## 6. 시퀄라이즈 쿼리 사용하기
    create 생성하기
    findAll 모두 찾기s
    find 하나만 찾기
    모두 Promise 지원 메서드 