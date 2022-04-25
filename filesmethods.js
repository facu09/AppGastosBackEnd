const fs = require("fs");
// const { platform } = require("os");
// const { resolve } = require("path");


const GASTO_PATH = "./data/gastos.json";

//Funcion recuperar los gastos del archivo gastos.json
const getGastos = () => {
    console.log("Entro al getGastos del filesmethods.js");
    
    return new Promise((resolve, reject) => {
        fs.readFile(GASTO_PATH, "utf8", (err, result) => {
            if (err) {
                reject(err);
            }
            //Devuelve el parseado de archivo GASTOS_PATH (gastos.json)
            resolve(JSON.parse(result));
        });
    });
};

//Funcion para Guardar nuevo gasto
const saveGastos = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(GASTO_PATH, JSON.stringify(data), (err, result) => {
            if(err) {
                reject(err);
            }
            resolve("OK")
        });
    });
};

module.exports = {
    getGastos, 
    saveGastos
};