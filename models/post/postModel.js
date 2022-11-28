const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

// definition d'un schèma
const postSchema=mongoose.Schema({
    titre: {
       // chaine de caractère unique non nulle
        type: String,
        required: true,
        unique: true
    },
    auteur:{
        // chaine de caractère avec la valeur "unkown" par defaut
        type: String,
        
    },
    resume:{
        // chaine de caractère non nulle de moins de 100 caractères
        type:String,
        required:true,
        maxLength: 100
    },

    content: {
        // chaine de caractère non nulle, au moins de 100 caractères
        type:String,
        required:true,
        maxLength: 100
    }
}, {timestamps:true})

//créer et exporter un Modéle Post
