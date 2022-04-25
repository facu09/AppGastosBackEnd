const gastos = require("./gastos");


const ejecutaAllReportes = async () => {
    try{ 
      //1 - Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
      let listadoDeGastos = await gastos.getListadoDeGastos()
      console.log ("El Listado de Gastos del Período es:", listadoDeGastos)    
  
      //2-a Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
       listadoDeGastos = await gastos.getListadoDeGastosOrdanadoXMonto("Mayor")
      console.log ("El Listado de Gastos del Período ordenado x Importe descendentemente:", listadoDeGastos)       
      
       //2-b Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
       listadoDeGastos = await gastos.getListadoDeGastosOrdanadoXMonto("Menor")
       console.log ("El Listado de Gastos del Período ordenado x Importe ascendentemente:", listadoDeGastos)       
  
       //3-a Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
       listadoDeGastos = await gastos.getListadoDeGastosOrdanadoXFecha("Mayor")
       console.log ("El Listado de Gastos del Período ordenado x Fecha es Descendentemente:", listadoDeGastos)      
      
       //3-b Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
       listadoDeGastos = await gastos.getListadoDeGastosOrdanadoXFecha("Menor")
       console.log ("El Listado de Gastos del Período ordenado x Fecha es Ascendentemetne:", listadoDeGastos)      
  
       //4 Emito Reporte de Promedio de gastos del periodo
       const promedioDeGastos = await gastos.getPromedioDeGastos()
       console.log("El Promedio de Gastos es:", promedioDeGastos)
  
       //5 Emito Reporte de la suma de gastos del periodo
       const sumaDeGastos = await gastos.getSumaDeGastosDelPeriodo()
       console.log("La Suma de Gastos del Período es: ",  sumaDeGastos)
  
       //6 Emito Reprote del mayor gasto del periodo
       const mayorGasto = await gastos.getMayorGasto()
       console.log("El mayor de los Gastos del Período fue: ",  mayorGasto)
  
       //7 Emito Reporte del menor Gasto del periodo
       const menorGasto = await gastos.getMenorGasto()  //elemento del objeto de menor gasto
       console.log("El menor de los Gastos del Período fue: ",  menorGasto)
  
       return ("OK --> Resultado OK de la emision de todos los Reportes!!")
       
    } catch (err) {
      console.log ("Error en la funcion 'ejecutaAllReportes' " + err)
    }
  
  }

const run = async () => {
    const args = process.argv.slice(2)  //devuelve un arreglo nuevo desde la posicion 2, corta de la posicion 2 hasta el final

    console.log (process.argv) //devuelve los argumentos con los que se ejecuta en la termina: node app param1 param2 param3 param4...
    console.log("myArgs: ", args[0], " ",  args[1], " ",  args[2], " ",  args[3])

    //Case s/ el argumento que entro en la linea de comando:
    //1- node app addGasto 06/04/2022 TicketsShwos 5300
    //2- node app getPromedio  
    //3- node app getSuma   
    //4- node app getMayorGasto
    //5- node app getMenorGasto  

    switch (args[0]) {
        case "addGasto":
            try {
                console.log ("entro por el app.js addGato");
                //Agrego 1 Gasto al Archivo de Gastos en forma asyncronica: y espero para continuar
                const newGasto = await gastos.addGasto(args[1], args[2], args[3])
                console.log("Created gasto ok: " + JSON.stringify(newGasto))
            } catch (err) {
              console.log ("Error creating Gasto: " + err)
            }
            break;

        case "getGastos":
            //Listo por pantalla el Listado de Gastos del Periodo
            try {
                console.log ("entro por el app.js getGastos");
                //Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
                const listadoDeGastos = await gastos.getListadoDeGastos()
                console.log ("El Listado de Gastos del Período es:", listadoDeGastos)              
            } catch (err) {
              console.log ("Error en case getGastos: " + err)
            }
            break;

        case "getGastosSortMonto":
             //Listo por pantalla el Listado de Gastos del Periodo ordenado de Mayor a Menor por Precio
             try {
                console.log ("Entro por el app.js getGastos");
                //Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
                const listadoDeGastos = await gastos.getListadoDeGastosOrdanadoXMonto(args[1])
                console.log ("El Listado de Gastos del Período ordenado x Importe es:", listadoDeGastos)              
            } catch (err) {
              console.log ("Error en case getGastos: " + err)
            }
            break;
        
        case "getGastosSortFecha":
            //Listo por pantalla el Listado de Gastos del Periodo ordenado de Mayor a Menor por Precio
            try {
                console.log ("Entro por el app.js getGastos");
                //Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
                const listadoDeGastos = await gastos.getListadoDeGastosOrdanadoXFecha(args[1])
                console.log ("El Listado de Gastos del Período ordenado x Fecha es:", listadoDeGastos)              
            } catch (err) {
                console.log ("Error en case getGastos: " + err)
            }
            break;

        case "getPromedio":
            try {
                console.log ("Entró por el app.js getPromedio")
                const promedioDeGastos = await gastos.getPromedioDeGastos()
                console.log("El Promedio de Gastos es:", promedioDeGastos)
            } catch (err) {
                console.log("Error en calculando Promedio: " + err)
            }
            break;

        case "getSuma":
            try {
                console.log ("Entró por el app.js getSumaDeGastosDelPeriodo")
                const sumaDeGastos = await gastos.getSumaDeGastosDelPeriodo()
                console.log("La Suma de Gastos del Período es: ",  sumaDeGastos)
            } catch (err) {
                console.log("Error en getSumaDeGastosDelPeriodo " + err)
            }
            break;
        
        case "getMayorGasto":
            try {
                console.log ("Entró por el app.js getMayorGasto")
                const mayorGasto = await gastos.getMayorGasto()
                console.log("El mayor de los Gastos del Período fue: ",  mayorGasto)
            } catch (err) {
                console.log("Error en getMayorGasto " +  err)
            }
            break;
        
        case "getMenorGasto":
            try {
                console.log ("Entró por el app.js getMenorGasto")
                const menorGasto = await gastos.getMenorGasto()  //elemento del objeto de menor gasto
                console.log("El menor de los Gastos del Período fue: ",  menorGasto)
            } catch (err) {
                console.log("Error en getMenorGasto " + err)
            }
            break;

        case "all":
            try{
                console.log ("entro por el app.js 'all'.");
                //ejecuta todos los reporte (eso va a tardar: por eso va el await, es asincronico)
                const rto = await ejecutaAllReportes()
                console.log (rto)
                
            } catch (err) {
                console.log ("Error en 'all' " + err)
            }
            break;

        default:
            console.log ("El 1er parametro despues de 'node app' --> no es reconocido como un valido  ")
            break;  
    }

    console.log("Log despues del Case --> para ver el orden de los awaits")
};




run();
console.log("Despues del run --> para ver el orden de los awaits")

