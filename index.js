const express = require('express')
const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'devshop'
  }
})
const { getCategories, getCategoryById } = require('./models/category')
const { getProductsByCategoryId } = require('./models/product')

const app = express()
const port = process.env.PORT || 3333

db.on('query', query => {
  console.log('SQL: ', query.sql)
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (req, res) => {
  const categories = await getCategories(db)()
  res.render('home', {
    categories
  })
})
app.get('/categoria/:id/:slug', async (req, res) => {
  const categories = await getCategories(db)()
  const products = await getProductsByCategoryId(db)(req.params.id)
  const category = await getCategoryById(db)(req.params.id)

  res.render('category', {
    products,
    categories,
    category
    })
})

app.listen(port, error => {
  if (error) {
    console.log('Não foi possível iniciar o servidor')
  } else {
    console.log('DevShop server rodando...')
  }
})