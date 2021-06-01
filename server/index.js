var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/auth', (req, res) => {
	var user = req.body.usuario;
	var password = req.body.senha;

	console.log(user);
	console.log(password);

	app.locals.user = user;

	//res.send(app.locals.user);
	res.redirect('http://localhost:3000/home');
})

app.post('/user', (req, res) => {

})

app.listen(8080)
console.log('API funcionando');