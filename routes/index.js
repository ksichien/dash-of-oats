var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET banana pancakes page. */
router.get('/banana_pancakes', function(req, res, next) {
  res.render('banana_pancakes', { title: 'Banana Pancakes' });
});

/* GET chocolate babka page. */
router.get('/chocolate_babka', function(req, res, next) {
  res.render('chocolate_babka', { title: 'Chocolate Babka' });
});

/* GET chocolate cake page. */
router.get('/chocolate_cake', function(req, res, next) {
  res.render('chocolate_cake', { title: 'Chocolate Cake' });
});

/* GET chocolate chip cookies page. */
router.get('/chocolate_chip_cookies', function(req, res, next) {
  res.render('chocolate_chip_cookies', { title: 'Chocolate Chip Cookies' });
});

/* GET cinnamon swirl cake page. */
router.get('/cinnamon_swirl_cake', function(req, res, next) {
  res.render('cinnamon_swirl_cake', { title: 'Cinnamon_Swirl_Cake' });
});

/* GET energy bars page. */
router.get('/energy_bars', function(req, res, next) {
  res.render('energy_bars', { title: 'Energy Bars' });
});

/* GET sweet and sour sauce page. */
router.get('/sweet_and_sour_sauce', function(req, res, next) {
  res.render('sweet_and_sour_sauce', { title: 'Sweet And Sour Sauce' });
});

/* GET teriyaki sauce page. */
router.get('/teriyaki_sauce', function(req, res, next) {
  res.render('teriyaki_sauce', { title: 'Teriyaki Sauce' });
});

module.exports = router;
