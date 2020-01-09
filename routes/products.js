const init = db => {
  const router = require('express').Router()
  const { getProducts } = require('../controllers/products')
  
  router.get('/:id/:slug', getProducts(db))

  return router
}

module.exports = init