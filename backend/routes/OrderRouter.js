const router = require("express").Router();
const {createOrder} = require('../controllers/OrderController.js')

router.post('/', createOrder);

module.exports = router;