const mongoose = require("mongoose");

async function main(){
    try{
        await mongoose.connect("mongodb+srv://BalverSarethan:eGKkO3IfImh1oqNX@cluster0.u0sn9cj.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao banco!");
    } catch(error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main