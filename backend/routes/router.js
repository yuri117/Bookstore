const router = require("express").Router();

// Products router
const productsRouter = require("./products");
router.use("/", productsRouter);

// Clients router
const clientRouter = require("./clients");
router.use("/", clientRouter);

module.exports = router;