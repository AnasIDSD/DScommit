//requirements
var MongoClient = require('mongodb').MongoClient;
const env = require("dotenv");
const app = require("./app");


//dfinition du moteur de template
// Etablire une connexion à la base de données
env.config();
const URL = process.env.URI
MongoClient.connect("mongodb+srv://myblog:31BAakJZVotfPWll@cluster0.ybqupzv.mongodb.net/?retryWrites=true&w=majority", function (err, db) {
     
     if(err) throw err;
console.log("Database created!");

                
});
//Démarage du serveur su le le port : PORT dans .env
const PORT = process.env.PORT
app.listen(PORT)