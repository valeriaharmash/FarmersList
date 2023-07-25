const Product = require('../index.js')

class Cart {
	constructor() {
		this.products = [];
		this.total = 0;
	}
	addProduct(product) {
		this.products.push(product)
		this.total += product.price
	}
	removeProduct(product) {
		let index = this.products.indexOf(product)
		this.total -= products[i].price
		this.products.splice(i, 1)
		let i
	}
}