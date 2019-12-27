# MySQL_Sequelize

## 1. 시퀄라이즈(sequelize)와 MySQL 설치

    npm i sequelize mysql2
    npm i -g sequelize-cli 
    sequelize init


## 2. 워크벤치 소개와 시퀄라이즈로 데이터베이스 만들기
   
**데이터베이스 스키마 생성**

    sequelize db:create

**환경변수 설정**

```javascript
    const Sequelize = require('sequelize');
    
    // 실서비스에서 배포 할 때 production => 많은 패키지들이 배포용으로 바뀐다.
    const env = process.env.NODE_ENV || 'development';
    const config = require('../config/config.json')[env];

    // 인스터스 화 
    const sequelize = new Sequelize(config.database, config.username, config.password, config);
```

## 3. 시퀄라이즈 테이블 정의하기

```javascript
    function (Sequelize, DataType) => {
        return Sequelize.define('user', {
            name: {
                type: DataType.STRING(100),
                allowNull: false, 
                unique: true,
            },
            age: {
                type : DataType.INTEGER.UNSIGNED,
                allowNull: false,
            }, 
            married : {
                type: DataType.BOOLEAN,
                allowNull: false,
            }, 
            comment: {
                type: DataType.TEXT,
                allowNull: true,
            },
            created_at: {
                type: DataType.DATE,
                allowNull: false,
                defaultValue : Sequelize.literal('now()'),
            }
        }, 
        {
            timestamps: false,
            underscored: true,
        });
    };
```

### type: 자료형
    
    allowNull: NULL allow?
    defaultValue: 기본값
    unique: 고유값 여부
    comment: 컬럼 설명
    primaryKey: 기본키 여부(default: id 대체)

### 자료형: STRING(글자수)

    INTEGER, FLOAT, TEXT, DATE, BOOLEAN

### table setting
[참고](https://medium.com/wasd/node-js%EC%97%90%EC%84%9C-mysql-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-1-b4b69ce7433f)

**timestamps: false**

    생성일을 자동으로 기록할것인지?
    생성일은 직접 받기때문에 timestamps로 시퀄라이즈에서 전달 받지 않기 위해
    imestamps를 true로 주게 되면 createdAt과 updatedAt 컬럼을 추가합니다.

**underscored: true**
        
    Mysql은 스네이크 형식을 쓸거야 true
    JS는 캐멀 케이스지만 false

## 4. 시퀄라이즈 관계 설정하기
    
    1대1 (hasOne, belongsTo)    
    1대다 (hasMany, belongsTo)
    다대다(belongsToMany)

```javascript
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
/commetns/:id처럼 :파라미터로 주소에서 변하는 부분들을 가져올 수 있다. (GET)

**(req.params.파라미터)**

**(req.body.파라미터) (POST)**
- [HTTP의 GET과 POST 비교](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/Network#http%EC%9D%98-get%EA%B3%BC-post-%EB%B9%84%EA%B5%90)
  
두 라우터가 있다면, 와일드 카드 라우터가 더 뒤에 있어야 한다.

    /comments/hello
    /commennts/:id 

## 6. 시퀄라이즈 쿼리 사용하기
모두 **`Promise`** 지원 메서드 

### create 생성하기
```javascript
    Comment.create({
        commenter: req.body.id,
        comment: req.body.comment,
    })
```

### findAll 모두 찾기
```javascript
    Comment.findAll({
        include: {
            model: User,
            where: { id: req.params.id },
        }
    })
```

### findOne 하나만 찾기
```javascript
    Comment.findOne({
        where: { id: req.params.id },
    })
```

### update 수정하기
```javascript
    Comment.update({
        comment: req.body.comment
    }, {
        where: { id: req.params.id }
    })    
```

### delete 삭제하기
```javascript
    Comment.destroy({
        where: { id: req.params.id }
    })
```

## 7. app.js
```javascript
    // db의 object 비할당구조화
    const {sequelize} =require('./models');
    sequelize.sync();
```
