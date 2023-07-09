const {Products: ProductsModel } = require("../models/Products");

const productsController = {
    create: async(req, res) => {
        try{
            const product = {
                id: req.body.id,
                nome: req.body.nome,
                descricao: req.body.descricao,
                categoria: req.body.categoria,
                preco: req.body.preco,
                estoque: req.body.estoque,
                nome_arquivo: req.body.nome_arquivo,
            };

            const response = await ProductsModel.create(product);
            res.status(201).json({response, msg: "Produto criado com sucesso!"});

        } catch(error){
            console.log(`Erro: ${error}`);
        }
    },
    getAll: async (req, res) => {
        try {
            const products = await ProductsModel.find();
            res.json(products);
            
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    },
    get: async(req, res) => {
        try{
            const id = req.params.id;
            const product = await ProductsModel.findById(id);

            if (product == null){
                res.status(404).json({msg: "Produto não encontrado."});
                return;
            }

            res.json(product);
        }
        catch (error) {
            console.log(`Erro: ${error}`);
        }
    },
    delete: async(req, res) => {
        try{
            const id = req.params.id;
            const product = await ProductsModel.findById(id);
            if (product == null){
                res.status(404).json({msg: "Produto não encontrado."});
                return;
            }
            const deletedProduct = await ProductsModel.findByIdAndDelete(id);
            res.status(200).json({deletedProduct, msg: "Produto excluído com sucesso."});
        } catch(error){
            console.log(`Erro: ${error}`);
        }
    },
    deleteAll: async(req, res) => {
        try {
            const product = await ProductsModel.find();
            if (product == null){
                res.status(404).json({msg: "Nenhum produto encontrado."});
                return;
            }
            const deletedProduct = await ProductsModel.deleteMany();
            res.status(200).json({deletedProduct, msg: "Todos produtos excluído com sucesso."});
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id; 
            const product = {
                id: req.body.id,
                nome: req.body.nome,
                descricao: req.body.descricao,
                categoria: req.body.categoria,
                preco: req.body.preco,
                estoque: req.body.estoque,
                nome_arquivo: req.body.nome_arquivo,
            };

            const updatedProduct = await ProductsModel.findByIdAndUpdate(id, product);

            if (updatedProduct == null){
                res.status(404).json({msg: "Produto não encontrado."})
                return;
            }

            res.status(200).json({product, msg: "Produto atualizado com sucesso."});

        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    }
};

module.exports = productsController;