const crypto = require("crypto");

class Product {
  constructor(name, price, inStock) {
    this.id = this.generateId();
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }

  generateId() {
    return crypto.randomUUID();
  }
}

module.exports = Product;
