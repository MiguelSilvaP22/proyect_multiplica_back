>## Colores API

Este proyecto fue generado con [NODE JS y Express](https://expressjs.com/es/) version 4.17.
MongoBD como base de datos y
Utlizando la libreria [Eslint](https://eslint.org/), para realzar pruebas.


## [DEMO](http://167.99.106.28:3700)

## Inicio de Sistema

Correr comando `npm i` para instalar las depedencias y luego correr comando  `npm run start`. 


## Configuración de parametros generales

los parametros basicos para configurar la api estan en el archivo  `.env`



## Funcionamiento de api

```cmd
localhost:3700/api # GET'detalle de api'

Obtener Colores
localhost:3700/api/color            #GET 'lista de colores formato JSON'
localhost:3700/api/color?format=xml         #GET 'lista de colores formato XML'
localhost:3700/api/color?page=2          #GET 'lista de colores formato JOSN, pagina 2'
localhost:3700/api/color?page=2&format=xml          #GET 'lista de colores formato xml, pagina 2'

Detalle de color
localhost:3700/api/color/:id_color # GET 'detalle de color en formato json'
localhost:3700/api/color/:id_color?format=xml # GET 'detalle de color en formato xml'

Crear nuevo color
localhost:3700/api/color # POST 'Creación de color, ejemplo body {id:12,name:honeysuckle, year:2011, color:#D94F70, pantone_value:18-2120,
}


```