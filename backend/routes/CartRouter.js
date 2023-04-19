const router = require("express").Router();
const {createCart, deleteCartById, removeProduct, getCartByUserId, getCartById} = require('../controllers/CartController.js')

router.post('/add', createCart);

router.put('/', removeProduct);

router.delete('/:id', deleteCartById);

router.get('/user/:id', getCartByUserId);

router.get('/:id', getCartById);

module.exports = router;