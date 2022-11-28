
//requirements
var fs = require('fs')
const exp = require('express')
const app=exp();
const pug = require('pug')
const dot = require('dotenv');
const { join } = require("path")
const con = require('./server')

//utiliser les middleware nissecaires
app.set("view engine", "pug")
app.set("views", "views")
app.use(exp.urlencoded());
app.use(exp.json());
app.use(exp.static(join(__dirname,'/public')));

//Definition des routes
app.use('/', require('./routes/postRoutes'))
module.exports=app