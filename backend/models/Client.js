// Modelo de "tabela" do cliente

const mongoose = require("mongoose")

const { Schema } = mongoose

const { productSchema } = require("./Products")

const clientSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
    },
    primeiroNome: {
        type: String
    },
    ultimoNome: {
        type: String
    },
    rua: {
        type: String
    },
    bairro: {
        type: String
    },
    cep: {
        type: String
    },
    cidade: {
        type: String
    },
    estado: {
        type: String
    },
    products: {
        type: [productSchema]
    }
},
{ timestamps: true }
);

const Client = mongoose.model("Client", clientSchema)

module.exports = Client;

