const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
const conn = require("./db/conn");

conn();

// Router
const routes = require("./routes/router")

// Setando todas as rotas do servidor para /api
app.use("/api", routes)

app.listen(4242, () => console.log("Servidor rodando na porta 4242"));

// Username = BalverSarethan
// Senha = favor entrar em contato com o administrador do banco de dados