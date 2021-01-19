const express = require('express')
const expressHandlebars = require('express-handlebars')

const fortune = require('./lib/fortune')

const port = process.env.PORT || 3000
const app = express();

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', 'views')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() })
})

app.use((req, res) => {
  res.status(404)
  res.render('404')
})

app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500', {error: err})
})

app.listen(port, () => console.log(`server running on port ${port}. press 'CTRL + C' to terminate....`))

