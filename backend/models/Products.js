const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String, 
    },
    categoria: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    estoque: {
        type: String,
        required: true
    },
    nome_arquivo: {
        type: String,
        required: true
    }
},
{ timestamps: true}
);

const Products = mongoose.model("Products", productsSchema);

module.exports = { 
    Products, 
    productsSchema 
};