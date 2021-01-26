const path = require('path');

const express = require('express');
const expressHandlebars = require('express-handlebars');

// route handlers
const handlers = require('./lib/handlers');

// middlewares
const weatherMiddleware = require('./lib/middleware/weather');

const app = express();

// setting up handlebars view engine
/*
app.engine(
    'handlebars',
    expressHandlebars({
        defaultLayout: 'main',
        helpers: {
            section: function (name, options) {
                if (!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
            },
        },
    })
);
*/
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

/* eslint-disable no-undef */
app.use(express.static(path.join(__dirname, 'public')));
/* eslint-enable no-undef */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middlewares
app.use(weatherMiddleware);

// routes
app.get('/', handlers.home);
app.get('/about', handlers.about);
app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
    app.listen(3000, () => console.log('server listening on port 3000'));
} else {
    module.exports = app;
}
