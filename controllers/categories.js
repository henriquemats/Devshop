const { getCategoryById } = require('../models/category')
const { getProductsByCategoryId } = require('../models/product')

const getCategories = db => async (req, res) => {
  const products = await getProductsByCategoryId(db)(req.params.id)
  const category = await getCategoryById(db)(req.params.id)

  res.render('category', {
    products,
    category
  })
}

module.exports = {
  getCategories
}