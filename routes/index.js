let express = require('express');
let router = express.Router();
let request = require('request-promise');

/* GET home page. */
router.get('/goods/vanna', function(req, res, next) {
    request('https://api.myjson.com/bins/1blpju')
        .then(function (item) {
            item = JSON.parse(item);
            res.render('index', { title: item.title, article: item.article, size: item.size, color: item.color,
                description: item.description, price: item.price, img: item.img });
        })
        .catch(function (err) {
            // Crawling failed...
        });
});



module.exports = router;
