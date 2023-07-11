// Criação de rotas para o modelo de products, com os métodos de restful API
// GET, POST, PUT E DELETE (além da variação getAll e deleteAll)


const router = require("express").Router()

const productsController = require("../controllers/productsController")

router.route("/products").post((req, res) => productsController.create(req, res));

router.route("/products").get((req, res) => productsController.getAll(req, res));

router.route("/products/:id").get((req, res) => productsController.get(req, res));

router.route("/products").delete((req, res) => productsController.deleteAll(req, res));

router.route("/products/:id").delete((req, res) => productsController.delete(req, res));

router.route("/products/:id").put((req, res) => productsController.update(req, res));

module.exports = router;