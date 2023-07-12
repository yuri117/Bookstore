const mongoose = require("mongoose");

// Função que conecta à aplicação mongoose ao banco de dados do MongoDB Atlas
async function main(){
    try{
        // Num eventual deployment do projeto, o administrador do banco de dados deveria 
        // logar com suas credenciais especificando seu username e senha e aqui seria passado
        // como parâmetro nessa URL. Porém, para maior agilidade nessa versão de testes, optamos 
        // por simplificar o processo parseando diretamente a URI.
        await mongoose.connect("mongodb+srv://BalverSarethan:eGKkO3IfImh1oqNX@cluster0.u0sn9cj.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao banco!");
    } catch(error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main