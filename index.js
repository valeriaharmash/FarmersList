// Import Classes Here

const Product = require('./classes/Product')
const Cart = require('./classes/Cart')
const Customer = require('./classes/Customer')
const Auth = require('./classes/Auth')

// DO NOT EDIT BELOW THIS LINE
try {
	module.exports = {
		Product
	}
} catch (e) {}

try {
	module.exports = {
		Product,
		Cart
	}
} catch (e) {}

try {
	module.exports = {
		Product,
		Cart,
		Customer
	}
} catch (e) {}

try {
	module.exports = {
		Product,
		Cart,
		Customer,
		Auth
	}
} catch (e) {}
