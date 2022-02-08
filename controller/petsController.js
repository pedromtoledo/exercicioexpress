let modeloServico = require("../model/servico.json")

let modeloPets = require("../model/pets.json")

const petsController = {
    listaServico:(req,res) =>{
        res.send(modeloServico);
    },
    listaPets:(req,res) =>{
        res.send(modeloPets)
    }

}

module.exports = petsController