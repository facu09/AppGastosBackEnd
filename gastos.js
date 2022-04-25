const filesMethos = require("./filesmethods")

const GASTO_PATH = "./data/gastos.json";

//Agrego el gasto que viene por parametro al final del archivo GASTO_PATH
const addGasto = async (fecha, nombreGasto, importe) => {
    console.log("Entró al addGasto de gastos.js");
    //creo objeto de newGasto
    const newGasto = {
        fecha: fecha, 
        nombreGasto: nombreGasto,
        importe: importe
    };
    try {
        //traigo todos los gatos con un await asincronico
        const listaDeGastos = await filesMethos.getGastos();
        //agrego el gasto a la lista de objetos que viene por parametro de npm app.js en caliente
        listaDeGastos.push(newGasto);
        
        //grabo en el archivo gastos.json la nueva lista de gastos con el agregado. 
        await filesMethos.saveGastos(listaDeGastos);

        //Saber: esta línea se ejecuta luego de que termina el grabao de datos que tarde y es asincronico (xque estel await)
        return newGasto;

    } catch (err) {
        throw err;
    }

    //devuelvo en nuevo gasto agregado.
    // Ojo acá existe la const newGasto, xque esta definida y asignada arriba con los parametros
    // sin embergo lo correcto es retornar en el try{ }  --> por eso comento esta linea que la dejo de aprendizaje
    //return newGasto;
};

//Devuelvo un arreglo de objetos: una lista gatos del archivo GASTO_PATH (en el orden en que se encuentre en el archivo)
const getListadoDeGastos = async () => {
    console.log ("Entró a la función de getListadoDeGastos de gastos.js");
    
    try {
        //traigo todos los gatos con un await asincronico
        const listadoDeGastos = await filesMethos.getGastos();
        // console.log("Despues del await de buscar la lista de gatos", listadoDeGastos);
    
        return listadoDeGastos;

    } catch (err) {
        throw err;
    }

    // IMPORTANTE OJO: ACA NO SE CONOCOE EL AMBIENTE de variables DEL try{} catch{}:
    //    es decir NO SE CONOCE LA CONSTANTE listadoDeGastos ==> por ende el return tiene que estar en el try catch
    // PARA problarlo comenta el return del try catch, descomenta estas 2 línea y mira jajajaja
    // console.log("Antes del return fuera del try catch, el listado gastos es:", listadoDeGastos);
    // return listadoDeGastos
}

//Devuelvo un arreglo de objetos: una lista gatos del archivo GASTO_PATH (en el orden en que se encuentre en el archivo)
const getListadoDeGastosOrdanadoXMonto = async (psOrden) => {
    console.log ("Entró a la función de getListadoDeGastosDeMayorAMenorXMonto de gastos.js");
    
    console.log ("orden: '" + psOrden.toUpperCase() + "'")
    try {
        //traigo todos los gatos con un await asincronico
        const listaDeGastos = await filesMethos.getGastos();
        // console.log("Despues del await de buscar la lista de gatos", listadoDeGastos);
        
        //Ordeno el arreglo de Objetos  de gatos ordenado de mayor a menor por importe       
        const listaDeGastosOrdenados = listaDeGastos.sort((a,b) =>{
            //ordeno de mayor a menor
            if (psOrden.toUpperCase() === "MAYOR") {
                //ordeno de Mayor a Menor
                return Number.parseInt(b.importe) - Number.parseInt(a.importe)
            } else {
                //sino es MAYOR --> ordeno MENOR a MAYOR
                return Number.parseInt(a.importe) - Number.parseInt(b.importe)
            }
        }) 

        return listaDeGastosOrdenados;

    } catch (err) {
        throw err;
    }
}

//Devuelvo un arreglo de objetos: una lista gatos del archivo GASTO_PATH (en el orden en que se encuentre en el archivo)
const getListadoDeGastosOrdanadoXFecha = async (psOrden) => {
    console.log ("Entró a la función de getListadoDeGastosDeMayorAMenorXMonto de gastos.js");
    
    console.log ("orden: '" + psOrden.toUpperCase() + "'")
    try {
        //traigo todos los gatos con un await asincronico
        const listaDeGastos = await filesMethos.getGastos();
        // console.log("Despues del await de buscar la lista de gatos", listadoDeGastos);
        
        //Ordeno el arreglo de Objetos  de gatos ordenado de mayor a menor por importe       
        const listaDeGastosOrdenados = listaDeGastos.sort((a,b) =>{
            //ordeno de mayor a menor
            if (psOrden.toUpperCase() === "MAYOR") {
                return Number.parseInt(b.fecha) - Number.parseInt(a.fecha)
            } else {
                //sino es MAYOR --> ordeno MENOR a Mayor
                return Number.parseInt(a.fecha) - Number.parseInt(b.fecha)
            }
        }) 

        return listaDeGastosOrdenados;

    } catch (err) {
        throw err;
    }
}

const getPromedioDeGastos = async () => {
    console.log ("Entró a la funcion de getPromedioDeGastos.")
    let sumaDeGastos = 0
     //traigo todos los gatos con un await asincronico
    const listaDeGastos = await filesMethos.getGastos();

    listaDeGastos.forEach(element => {
        // console.log("Iteracion del forEach: " + element.importe)
        sumaDeGastos += parseFloat(element.importe)
    });
    console.log ("Suma de gastos " + sumaDeGastos + " lenght " + listaDeGastos.length)

    // console.log ("Funcion getPromedioDeGastos: " + sumaDeGastos / listaDeGastos.length)
    return sumaDeGastos / listaDeGastos.length
}

const getSumaDeGastosDelPeriodo = async () => {
    console.log ("Entró a la funcion de getSumaDeGastosDelPeriodo.")
    let sumaDeGastos = 0
     //traigo todos los gatos con un await asincronico
    const listaDeGastos = await filesMethos.getGastos();

    listaDeGastos.forEach(element => {
        // console.log("Iteracion del forEach: " + element.importe)
        sumaDeGastos += parseFloat(element.importe)
    });
    
    console.log ("Funcion getSumaDeGastosDelPeriodo: " + sumaDeGastos )
    return sumaDeGastos
}

const getMayorGasto = async () => {
    try{
        console.log ("Entró a la funcion de getMayorGasto.")
    
        //traigo todos los gatos con un await asincronico
        const listaDeGastos = await filesMethos.getGastos();

        //Obtengo Listado de gatos ordenado de mayor a menor por importe       
        const listaDeGastosOrdenados = listaDeGastos.sort((a,b) =>{
            //ordeno de mayor a menor
            return Number.parseInt(b.importe) - Number.parseInt(a.importe)
        }) 
          
        // console.log('Array Ordenado: ',listaDeGastosOrdenados)
        // console.log('Mayor Valor: ', listaDeGastosOrdenados[0])
        
        mayorGastos = listaDeGastosOrdenados[0]
     
        // console.log ("Funcion getMayorGasto: ", mayorGatos )
        // console.log(mayorGatos)
        return mayorGastos
    
    } catch (err) {
        console.log ("Error en funcion getMayorGasto", err)
    }

    //IMPORTANTE ACÁ NO SE CONOCE EL AMBIENTE DEL try{} catch{} --> no se conoce LA constante mayorGasto
}

const getMenorGasto = async () => {
    try{
        console.log ("Entró a la funcion de getMayorGasto.")
    
        //traigo todos los gatos con un await asincronico
        const listaDeGastos = await filesMethos.getGastos();

        //Obtengo Listado de gatos ordenado de mayor a menor por importe       
        const listaDeGastosOrdenados = listaDeGastos.sort((a,b) =>{
            //ordeno de menor a mayor
            return  Number.parseInt(a.importe) - Number.parseInt(b.importe)
        }) 
          
        // console.log('Array Ordenado: ',listaDeGastosOrdenados)
        // console.log('Mayor Valor: ', listaDeGastosOrdenados[0])
        
        menorGatos = listaDeGastosOrdenados[0]
     
        // console.log ("Funcion getMayorGasto: ", mayorGatos )
        // console.log(mayorGatos)
        return menorGatos
    
    } catch (err) {
        console.log ("Error en funcion getMayorGasto", err)
    }

    //OJO IMPORTANTE ACÁ NO SE CONOCE EL AMBIENTE DEL try{} catch{} --> no se conoce LA constante mayorGasto
}

module.exports = {
    addGasto,
    getListadoDeGastos,
    getListadoDeGastosOrdanadoXMonto, 
    getListadoDeGastosOrdanadoXFecha, 
    getPromedioDeGastos,
    getSumaDeGastosDelPeriodo, 
    getMayorGasto, 
    getMenorGasto,
};