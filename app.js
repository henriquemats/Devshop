const init = db => {
  const express = require('express')

  const { getCategories: getCategoriesModel } = require('./models/category')

  const router = require('./routes')

  const app = express()

  app.set('view engine', 'ejs')
  app.use(express.static('public'))

  app.use(async (req, res, next) => {
    const categories = await getCategoriesModel(db)()

    res.locals = {
      categories
    }

    next()
  })

  app.use(router(db))

  return app
}

module.exports = init