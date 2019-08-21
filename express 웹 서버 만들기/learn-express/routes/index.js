const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('세 번째 라우터 미들웨어');
  // try {
  //   throw new Error('서버 다운!!');
  // } catch(err) {
  //   next(err);
  // }
  res.render('index', { 
    title: 'ejs',
    fruits : ['사과', '배', '오렌지'], 
  });
});
router.get('/posts', (req, res) => {
});
router.get('/comments', (req, res) => {
});
router.get('/list', (req, res) => {
});
router.post('/', (req, res) => {
});

module.exports = router;
