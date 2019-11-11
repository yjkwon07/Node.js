const path = require('path');
const Sequelize = require('sequelize');

// 환경변수 
// 실서비스에서 배포 할 때 production => 많은 패키지들이 배포용으로 바뀐다.
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

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

module.exports = db;
