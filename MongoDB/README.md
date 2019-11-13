# MongoDB

**`mongod`** 로 mongoDB를 실행한다. 

권한(아이디/패스워드)로 로그인 설정     
    
    mongod --auth

## 특징
1. 속성 안에 객체를 넣을 수도 있다. 
2. MySQL에서 테이블과의 관계가 있지만 몽고DB에서는 관계가 없다. 
```
    MySQL 스키마-테이블-로우
    MongoDB 디비-컬렉션-다큐먼트
```
3. 자유로운 데이터들이 들어올 때 많이 쓴다. (ex. 빅데이터 수집)
- 정제된 데이터가 아닌 SNS 데이터처럼 컬럼이(형식이) 없는 특징이 라면 몽고디비 같이 NoSQL을 많이 사용한다. 
- 다큐먼트들이 일정한틀(스키마)이 아닐 수 있다. 
- `고정된 길이의` 배열이면 속성 안에 넣고, `계속 늘어날 것 같다면` (댓글처럼) **`컬렉션`** 을 별도로 둔다. 

## Mongoose
**Object-Document-Mapping**

sequlieze(ORM) 모델과 비슷한 역할을 하는게 몽구스 스키마이다. 

**`몽구스(ODM)는`** 몽고디비에 제약을 두지만 편의성과 안정성을 추가한다. 

- 예기치 않은 컬럼 추가를 방지 

## connect 

    admin -> admin의 저장된 유저정보를 확인한다. 
    dbName -> 실제 데이터베이스 사용

```javascript
    const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

    const connect = () => {
        if (NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(MONGO_URL, {
            dbName: 'nodejs',
        }, (error) => {
            if (error) {
                console.error('몽고디비 연결 에러', error);
            } else {
                console.log('몽고디비 연결 성공');
            }
        });
    };
```

mongodb 이벤트 리스너를 사용하여 연결이 끊어졌을 때 다시 연결 재시도 

```javascript
    module.exports = () => {
        connect();

        mongoose.connection.on('error', (error) => {
            console.error('몽고디비 연결 에러', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.error('몽고디비 연결이 끊어졌습니다. 연결을 재시도 합니다.');
            connect();
        });

        require('./user');
        require('./comment');
    };
```

**require를 사용한 이유:**
- mongoose.model 함수를 한 번 실행해놓기 위해서 하는 방법
- require을 하면 해당 경로의 내용이 한 번 실행된다.

## schema 
**mongoose.model(모델명, 스키마, 컬렉션명)**

```javascript
    const mongoose = require('mongoose');

    const { Schema } = mongoose;
    const { Types: { ObjectId } } = Schema;
    const commentSchema = new Schema({
        commenter: {
            type: ObjectId,
            required: true,
            ref: 'User',
        },
        comment: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    });

    module.exports = mongoose.model('Comment', commentSchema);
```

mysql, mongodb의 공통점: **`id`** 는 알아서 자동으로 생성 

* mongodb : _id
```
    type: 자료형 (type만 있을 경우 {}를 없이 사용가능하다.)
    required: 필수 여부
    unique: 고유 여부
    default: 기본값 (sequelize: defaultValue)
```

## query sequlize vs mongoose

### 1. db 가져오기
```javascript
    const User = require('../schemas/user');
    const Comment = require('../schemas/comment');
```

**sequelize**
```javascript
    // db의 객체에 User, Comment 정의 한것을 비구조 할당 
    const { User, Comment } = require('../models');
```

### 2. new 스키마(data).save
```javascript
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married
    });
    user.save()
```

**sequelize**

.create({컬럼 값})
```javascript
     Comment.create({
        commenter: req.body.id,
        comment: req.body.comment,
    })
```

### 3. find
모두 찾기
```javascript
    User.find({})
```

**sequelize**

findAll
```javascript
    Comment.findAll({
        include: {
            model: User,
            where: { id: req.params.id },
        }
    })
```

### 4. findOne
하나만 찾기
```javascript
    Comment.findOne({commenter:req.params.id})
```

**sequelize**

findOne
```javascript
    Comment.findOne({
        where: { id: req.params.id },
    })
```

### 5. update

update({조건} , {수정할 속성})

```javascript
    Comment.update({_id: req.params.id}, {comment:req.body.comment})
```

**sequelize**

.update({수정할 컬럼}, {조건})

```javascript 
 Comment.update(
    {
        comment: req.body.comment
    }, 
    {
        where: { id: req.params.id }
    })
```

### 6. remove
```javascript
    Comment.remove({_id: req.params.id})
```

**sequelize**

.destroy({조건})
```javascript
    Comment.destroy({
        where: { id: req.params.id }
    })
```

## populate
schema정의 부분 참고

```javascript
    const commentSchema = new Schema({
    commenter: {
        type: ObjectId,
        required: true,
        ref: 'User',
    },
```

populate(필드)가 sequelize의 include(join)와 비슷한 역할을 한다.

```javascript
    Comment.find({commenter:req.params.id}).populate('commenter')
```

```javascript
    router.post('/', (req, res, next) => {
        const comment = new Comment({
            commenter: req.body.id,
            comment: req.body.comment,
        });
        comment.save()
        .then((result) => {
            return Comment.populate(result, {path: 'commenter'});
        })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err)=> {
            console.error(err);
            next(err);
        });
    });
```
Comment 스키마를 조사하고 commenter의 ObjectId와 ref: 'User'를 참조하여 User의 스키마 형식으로 주입한다. 

mongodb에서는 관계형이 없으므로 join기능을 지원하지 않지만 **`mongoose`** 가 억지로 지원 하기 때문에 성능이 떨어진다. (따라서 제약이 필요한 어쩔수 없는 상황 일 때 추천)


## app.js
```javascript
    var connect = require('./schemas');
    connect();
```
