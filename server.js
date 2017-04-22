//tomar express
var express = require('express');

//crear la app

var app = express();

//crear una ruta express para la página inicial
//http://localhost:8080/
app.get('/',function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

//iniciar el servidor en el puerto 8080
app.listen(8080);
//mandar mensaje
console.log('Servidor iniciado');
