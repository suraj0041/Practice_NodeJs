import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello world index')
});

router.post('/post', function(req, res, next) {
  res.send('hello world index'+JSON.stringify(req.body))
});

export default router;
