const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'devshop'
  }
})

const app = require('./app')(db)

const port = process.env.PORT || 3333

db.on('query', query => {
  console.log('SQL: ', query.sql)
})

app.listen(port, error => {
  if (error) {
    console.log('Não foi possível iniciar o servidor')
  } else {
    console.log('DevShop server rodando...')
  }
})