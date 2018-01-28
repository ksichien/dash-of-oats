var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

/* GET banana pancakes page. */
router.get('/banana_pancakes', (req, res, next) => {
  res.render('banana_pancakes', { title: 'Banana Pancakes' });
});

/* GET chocolate babka page. */
router.get('/chocolate_babka', (req, res, next) => {
  res.render('chocolate_babka', { title: 'Chocolate Babka' });
});

/* GET chocolate cake page. */
router.get('/chocolate_cake', (req, res, next) => {
  res.render('chocolate_cake', { title: 'Chocolate Cake' });
});

/* GET chocolate chip cookies page. */
router.get('/chocolate_chip_cookies', (req, res, next) => {
  res.render('chocolate_chip_cookies', { title: 'Chocolate Chip Cookies' });
});

/* GET cinnamon swirl cake page. */
router.get('/cinnamon_swirl_cake', (req, res, next) => {
  res.render('cinnamon_swirl_cake', { title: 'Cinnamon_Swirl_Cake' });
});

/* GET energy bars page. */
router.get('/energy_bars', (req, res, next) => {
  res.render('energy_bars', { title: 'Energy Bars' });
});

/* GET sweet and sour sauce page. */
router.get('/sweet_and_sour_sauce', (req, res, next) => {
  res.render('sweet_and_sour_sauce', { title: 'Sweet And Sour Sauce' });
});

/* GET teriyaki sauce page. */
router.get('/teriyaki_sauce', (req, res, next) => {
  res.render('teriyaki_sauce', { title: 'Teriyaki Sauce' });
});

module.exports = router;
