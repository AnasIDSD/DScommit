const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

// definition d'un schèma
const postSchema=mongoose.Schema({
    titre: {
       // chaine de caractère unique non nulle
    },
    auteur:{
        // chaine de caractère avec la valeur "unkown" par defaut
    },
    resume:{
        // chaine de caractère non nulle de moins de 100 caractères
    },

    content: {
        // chaine de caractère non nulle, au moins de 100 caractères
    }
}, {timestamps:true})

//créer et exporter un Modéle Post
