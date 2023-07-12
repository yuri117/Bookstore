// Bcrypt será utilizado para criação de hash das senhas, para não armazenarmos as
// senhas do usuário nos servidores e apenas o hash delas.

const bcrypt = require("bcrypt");

const ClientModel = require("../models/Client");

// Implementação dos métodos da resftul API
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
            const user = req.params.user;
            const client = await ClientModel.find({ user: user });

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
            const user = req.params.user;
            const client = await ClientModel.find({ user: user });

            if (client == null){
                res.status(404).json({msg: "Cliente não encontrado."});
                return;
            }

            const deletedClient = await ClientModel.deleteOne({ user: user });
            
            res.status(200).json({ deletedClient, msg: "Cliente excluído com sucesso."})
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    }, 
    update: async(req, res) => {
        try {

            const hashedPwd = await bcrypt.hash(req.body.senha, 10); 

            const clientObj = {
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

            const userParam = req.params.user;
            const updatedClient = await ClientModel.findOneAndUpdate({ user: userParam }, clientObj);

            if (updatedClient == null){
                res.status(404).json({msg: "Cliente não encontrado."});
                return;
            }

            res.status(200).json({clientObj, msg: "Cliente atualizado com sucesso."});
            
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    }
};

module.exports = clientController;