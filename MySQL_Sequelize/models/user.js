module.exports = (Sequelize, DataType) => {
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
        // 생성일을 알아서 기록?
        // 생성일은 직접 받을거니깐
        // timestamps는 시퀄라이즈 보고 받지 말라고
        timestamps: false,
        // Mysql은 스네이크 형식을 쓸거야 true
        // JS는 캐멀 케이스지만 false
        underscored: true,
      });
};

// .users 테이블
// 이름, 나이, 결혼여부, 자기소개, 생성일
// yjkon, 26, false, 
// 테이블 안에 데이터가 들어갈 수 있는 틀(컬럼틀)을 만든다.

// type: 자료형
// allowNull: NULL이어도 돼?
// defaultValue: 기본값
// unizue: 고유값 여부
// comment: 컬럼 설명
// primaryKey: 기본키 여부(id 대체)

// 자료형: STRING(글자수),
// INTEGER, FLOAT, TEXT, DATE, BOOLEAN