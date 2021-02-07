En esta actividad vamos a hacer un group con más de un campo.
En "datos.js" se encuentran los datos utilizados, y en "consulta.js" la consulta.


La consulta consta de un primer match para cojer solo las ventas despues de enero de 2020.

Luego un group, los id campo mes y campo producto.

Un campo ventaTotal con la suma de los precios del producto en ese més.

Luego viene un project donde mones el mes, el producto, total, y luego añadimos el campo iva y totalmasIva con sus cuentas.

Lo ordenamos por mes y por producto.

Y un match final para que el totalmasiva sea mayor que 800.