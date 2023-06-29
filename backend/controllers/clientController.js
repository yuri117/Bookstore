const bcrypt = require("bcrypt");



const ClientModel = require("../models/Client");

const clientController = {
    create: async(req, res) => {
        try {
            const hashedPwd = await bcrypt.hash(req.body.senha, 10); 

            const client = {
                user: req.body.user,
                senha: hashedPwd, 
                admin: req.body.admin,
                primeiroNome: req.body.primeiroNome,
                ultimoNome: req.body.ultimoNome,
                rua: req.body.rua,
                bairro: req.body.bairro,
                cep: req.body.cep,
                cidade: req.body.cidade,
                estado: req.body.estado,
                products: req.body.products,
            };
            const response = await ClientModel.create(client);
            res.status(201).json({response, msg: "Cliente cadastrado com sucesso no servidor."});

        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    },
    getAll: async(req, res) => {
        try {
            const clients = await ClientModel.find();
            res.json(clients);
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    }, 
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const client = await ClientModel.findById(id);

            if (client == null){
                res.status(404).json({msg: "Cliente não encontrado."});
                return;
            }
            res.json(client);

        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const client = await ClientModel.findById(id);

            if (client == null){
                res.status(404).json({msg: "Cliente não encontrado."});
                return;
            }

            const deletedClient = await ClientModel.findByIdAndDelete(id);
            
            res.status(200).json({ deletedClient, msg: "Cliente excluído com sucesso."})
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    }, 
    update: async(req, res) => {
        try {
            const id = req.params.id;

            const hashedPwd = await bcrypt.hash(req.body.senha, 10); 

            const client = {
                user: req.body.user,
                senha: hashedPwd, 
                admin: req.body.admin,
                primeiroNome: req.body.primeiroNome,
                ultimoNome: req.body.ultimoNome,
                rua: req.body.rua,
                bairro: req.body.bairro,
                cep: req.body.cep,
                cidade: req.body.cidade,
                estado: req.body.estado,
                products: req.body.products,
            };

            const updatedClient = await ClientModel.findByIdAndUpdate(id);

            if (updatedClient == null){
                res.status(404).json({msg: "Cliente não encontrado."});
                return;
            }

            res.status(200).json({client, msg: "Cliente atualizado com sucesso."});
            
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    }
};

module.exports = clientController;