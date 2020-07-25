>## Colores API

Este proyecto fue generado con [NODE JS y Express](https://expressjs.com/es/) version 4.17.
MongoBD como base de datos y
Utlizando la libreria [Eslint](https://eslint.org/), para realzar pruebas.


## [DEMO](http://167.99.106.28:3700/api)

## Inicio de Sistema

Correr comando `npm i` para instalar las depedencias y luego correr comando  `npm run start`. 


## Configuración de parametros generales

los parametros basicos para configurar la api estan en el archivo  `.env`



## Funcionamiento de api

```
#GET localhost:3700/api                             'detalle de api'

Obtener Colores
#GET localhost:3700/api/color                       'lista de colores formato JSON'
#GET localhost:3700/api/color?format=xml            'lista de colores formato XML'
#GET localhost:3700/api/color?page=2                'lista de colores formato JOSN, pagina 2'
#GET localhost:3700/api/color?page=2&format=xml     'lista de colores formato xml, pagina 2'

Detalle de color
#GET localhost:3700/api/color/:id_color             'detalle de color en formato json'
#GET localhost:3700/api/color/:id_color?format=xml  'detalle de color en formato xml'

Crear nuevo color
#POST localhost:3700/api/color                      'Creación de color, ejemplo body {id:12,name:honeysuckle, year:2011, color:#D94F70, pantone_value:18-2120}'

```