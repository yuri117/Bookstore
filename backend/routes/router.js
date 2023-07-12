// Esse js adiciona as rotas de clients e products ao router que será usado em app.js

const router = require("express").Router();

// Products router
const productsRouter = require("./products");
router.use("/", productsRouter);

// Clients router
const clientRouter = require("./clients");
router.use("/", clientRouter);

module.exports = router;