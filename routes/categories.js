const init = db => {
  const router = require('express').Router()
  const { getCategories } = require('../controllers/categories')
  
  router.get('/:id/:slug', getCategories(db))

  return router
}

module.exports = init