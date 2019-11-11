const express = require('express');
const router = express.Router();
const { User, Comment } = require('../models');

// GET/comments
// GET/comments/5
// include: 모델 간의 관계 연결
// model: 어떤 모델인지 지정
// where: 쿼리 조건 설정
router.get('/:id', (req, res, next) => {
    Comment.findAll({
        include: {
            model: User,
            where: { id: req.params.id },
        }
    })
        .then((comment) => {
            console.log(`Select Done of ${req.params.id}: ${comment}`);
            res.status(200).json(comment);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

// PATCH /comments/:id/
// update 수정하기
router.patch('/:id', (req, res, next) => {
    Comment.update({
        comment: req.body.comment
    }, {
        where: { id: req.params.id }
    })
        .then((result) => {
            console.log(`UPDATE Commnet of ${req.params.id} to ${req.body.comment}`);
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

// destroy 삭제하기
router.delete('/:id', (req, res, next) => {
    Comment.destroy({
        where: { id: req.params.id }
    })
        .then((result) => {
            console.log(`DELETE Comment of ${req.params.id}`);
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

// CREATE Comment
router.post('/', (req, res, next) => {
    Comment.create({
        commenter: req.body.id,
        comment: req.body.comment,
    })
        .then((result) => {
            console.log(`CREATE Comment of ${req.body.id}`);
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

module.exports = router;