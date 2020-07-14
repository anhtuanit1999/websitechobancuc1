var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'Express' });
});

router.get('/quotes', function(req, res, next) {
    res.render('quotes', { title: 'Express' });
});

router.get('/books', function(req, res, next) {
    res.render('books', { title: 'Express' });
});

router.get('/lienhe', function(req, res, next) {
    res.render('lienhe', { title: 'Express' });
});

router.get('/checkout', function(req, res, next) {
    res.render('checkout', { title: 'Express' });
});

router.get('/thanhtoan', function(req, res, next) {
    res.render('thanhtoan', { title: 'Express' });
});

router.get('/calendar', function(req, res, next) {
    res.render('calendar', { title: 'Express' });
});

router.get('/lich', function(req, res, next) {
    res.render('lich', { title: 'Express' });
});

module.exports = router;