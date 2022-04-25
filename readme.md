Comandos que interpreta el programa:

1- Agregado de items al archivo /data/gastos.json:
  node app addGasto 06/04/2022 Tickets Shows 5300

2- Listado de Gastos como se fueron cargando:
  node app getGastos 

3- Listado de Gastos ordenado Monto segun 2do parametro:
  node app getGastosSortMonto menor
  node app getGastosSortMonto mayor

4- Listado de Gastos ordenado Fecga segun 2do parametro:
  node app getGastosSortFecha menor 
  node app getGastosSortFecha mayor

5- Obtiene el Promedio de gastos del período:
  node app getPromedio 

6- Obtiene la Suma total de gastos del período:
  node app getSuma

7- Obtiene el Mayor gasto del período:
  node app getMayorGasto

8- Obtiene el Menor gasto del período:
  node app getMenorGasto 

9- Ejecuta un consol.log de todos los reportes anteriores de 2 al 8.
  node app all