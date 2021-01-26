const fortune = require('./fortune');

const homeObj = {
    currency: {
        name: 'United States dollars',
        abbrev: 'USD',
    },
    tours: [
        { name: 'Hood River', price: '$99.95' },
        { name: 'Oregon Coast', price: '$159.95' },
    ],
    specialUrl: '/january-specials',
    currencies: ['USD', 'GBP', 'BTC'],
};

exports.home = (req, res) => res.render('home', homeObj);

exports.about = (req, res) =>
    res.render('about', { fortune: fortune.getFortune() });

exports.notFound = (req, res) => {
    res.status(404);
    res.render('404');
};

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => {
    res.status(500);
    res.render('500');
};
/* eslint-disable no-unused-vars */
