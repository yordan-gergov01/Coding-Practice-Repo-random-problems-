const Product = require("./product");
const ProductManager = require("./manager");

const newProduct = new Product("Coffee", 3.99, true);
const manager = new ProductManager("./products.json");

manager.addProduct(newProduct);

const found = manager.findProductById(newProduct.id);

manager.removeProduct(newProduct.id);

console.log("After deletion: ", manager.getAllProducts());
