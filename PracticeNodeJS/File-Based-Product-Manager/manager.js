const fs = require("fs");

class ProductManager {
  constructor(filePath) {
    this.filePath = "./products.json";
    const fileJsonHandle = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    this.products = JSON.parse(fileJsonHandle);
  }

  addProduct(product) {
    // add new product to the array
    this.products.push(product);
    fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
  }

  getAllProducts() {
    // get all products
    return this.products;
  }

  findProductById(id) {
    // get product by id
    const product = this.products.find((product) => product.id === id);

    return product;
  }

  removeProduct(id) {
    // deleting product by id
    this.products = this.products.filter((product) => product.id !== id);

    fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
  }
}

module.exports = ProductManager;
