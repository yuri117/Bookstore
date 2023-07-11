// Criação de rotas para o modelo de clients, com os métodos de restful API
// GET, POST, PUT E DELETE (além da variação getAll)

const router = require("express").Router()

const clientController = require("../controllers/clientController");

router.route("/clients").post((req, res) => clientController.create(req, res));

router.route("/clients").get((req, res) => clientController.getAll(req, res));

router.route("/clients/:user").get((req, res) => clientController.get(req, res));

router.route("/clients/:user").delete((req, res) => clientController.delete(req, res));

router.route("/clients/:user").put((req, res) => clientController.update(req, res));

module.exports = router;