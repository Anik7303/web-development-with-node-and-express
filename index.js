const express = require('express')
const expressHandlebars = require('express-handlebars')

const port = process.env.PORT || 3000
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.use((req, res) => {
  res.status(404)
  res.type('text/plain')
  res.send('404 - Not Found')
})

app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Sever Error')
})

app.listen(port, () => console.log(`server running on port ${port}. press 'CTRL + C' to terminate....`))

