# ProyectoDD
Repositorio para clase de Diseño Digital
Las instrucciones están especificadas en un txt dentro de la carpeta "ProyectoDD"

Integrantes del grupo:
Cesar Eduardo Perea Zaldivar - 20192001001 
Darwin Eduardo Pineda Valenzuela - 20192002582
Félix Amilcar Peña Garcia - 20192001610
Jaciel Josafath Hernández Zuniga - 

INSTRUCCIONES:
1) Base de datos:
descargar MongoDB https://www.mongodb.com/try/download/community
instalar con los valores por default
utilizar URI por defecto (mongodb://localhost:27017)
crear una base de datos con el nombre "node_crud" y un collection name "users"
2) Dependencias:
en la carpeta del proyecto usando la terminal de VSC (NECESARIO NODE):
npm i express mongoose express-session ejs multer dotenv
npm install -D nodemon
npm install jsonwebtoken
...
3) Funcionamiento:
npm start para iniciar el servidor node
importante encender la base de datos
utilizar la plataforma de pruebas de API de preferencia (RECOMENDADO USAR RapidAPI)
4) Requests necesarias para realizar las pruebas:
    a) AUTH-POST (importante para poder realizar las demas, sino no funcionan):
    ruta: http://localhost:5000/auth/auth
    headers: content-type = application/json
    devuelve el token, este se tiene que enviar en el auth/bearer de los demas request
    b) GET:
    users:
        ruta: http://localhost:5000/routes/auth/usuarios
        dibuja en consola y devuelve los registros de users
    products:
        ruta: http://localhost:5000/routes/auth/productos
        dibuja en consola y devuelve los registros de products
    c) POST:
    users:
        ruta: http://localhost:5000/routes/auth/addUser
        headers: content-type = application/json, authorization = http token auth
        {name,email,pass}
    products:
        ruta: http://localhost:5000/routes/auth/addProduct
        headers: content-type = application/json, authorization = http token auth
        {name,description,price}
    d) PUT:
    users:
        ruta: http://localhost:5000/routes/auth/updateUser/id
        headers: content-type = application/json, authorization = http token auth
        {name,email,pass}
        importante: debe proporcionar el id del usuario de forma manual en el request
    products:
        ruta: http://localhost:5000/routes/auth/updateProduct/id
        headers: content-type = application/json, authorization = http token auth
        {name,description,price}
        importante: debe proporcionar el id del producto de forma manual en el request
    e) DELETE:
    users:
        ruta: http://localhost:5000/routes/auth/deleteUser/id
        headers: authorization = http token auth
        importante: debe proporcionar el id del usuario de forma manual en el request
    products:
        ruta: http://localhost:5000/routes/auth/deleteProducto/id
        headers: authorization = http token auth
        importante: debe proporcionar el id del producto de forma manual en el request
