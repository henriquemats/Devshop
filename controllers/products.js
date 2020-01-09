const { getProductById } = require('../models/product')

const getProducts = db => async (req, res) => {
  const product = await getProductById(db)(req.params.id)

  res.render('product-detail', {
    product,
  })
}

module.exports = {
  getProducts
}