const router = require("express").Router();
const { getAllProducts, getProductById } = require('../controllers/ProductController.js')
 
router.get('/',getAllProducts);

router.get('/:id', getProductById);
 
module.exports = router;