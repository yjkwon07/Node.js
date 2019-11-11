module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment' , {
        // commenter: {
        //     type : DataTypes.STRING(20),
        //     allowNull : false,
        //     unique : true
        // },
        comment : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
    }, {
        timestamps: false,
        underscored: true,
    });
};

// comment 테이블
// 작성자, 댓글 내용, 생성일
// yjkwon, 안녕하세요, 