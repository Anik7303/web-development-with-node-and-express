const express = require('express')
const handlebars = require('express-handlebars')

// route handlers
const handlers = require('./lib/handlers')

// variables
const PORT = process.env.PORT || 3000

const app = express()

// setting up handlebars view engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', 'views')


// routes
app.get('/', handlers.home)
app.get('/about', handlers.about)
app.use(handlers.notFound)
app.use(handlers.serverError)

app.listen(PORT, () => console.log(`server running on port ${PORT}. press 'CTRL + C' to terminate....`))

