const router = require("express").Router()

const clientController = require("../controllers/clientController");

router.route("/clients").post((req, res) => clientController.create(req, res));

router.route("/clients").get((req, res) => clientController.getAll(req, res));

router.route("/clients/:id").get((req, res) => clientController.get(req, res));

router.route("/clients/:id").delete((req, res) => clientController.delete(req, res));

router.route("/clients/:id").put((req, res) => clientController.update(req, res));

module.exports = router;