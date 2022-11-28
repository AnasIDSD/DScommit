const pug = require('pug');
const env = require('dotenv')
const Post=require("../models/post/postModel")
const ObjectID = require('mongodb').ObjectId;


async function getPosts(req,res){
    async function getposs() {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient("mongodb+srv://myblog:31BAakJZVotfPWll@cluster0.ybqupzv.mongodb.net/?retryWrites=true&w=majority")
    await client.connect();
    const db = client.db('myblog')
    const coll = db.collection('posts')
    const post = await coll.find().toArray()
    return post
    }
    const thispost = getposs().catch(console.error)
    res.render('index', { thispost: await thispost})}

async function getPost(req,res){
    //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
    id = req.params.id
    console.log(id)
    async function getpos() {
        const { MongoClient } = require('mongodb');
        const client = new MongoClient("mongodb+srv://myblog:31BAakJZVotfPWll@cluster0.ybqupzv.mongodb.net/?retryWrites=true&w=majority")
        await client.connect();
        const db = client.db('myblog')
        const coll = db.collection('posts')
        const post = await coll.find({_id: new ObjectID(id) }).toArray()
        console.log(post)
        return post

    }
    const thispost = getpos().catch(console.error)
    res.render('post', { thispost: await thispost })
}

async function addPost(req,res){
    //Créer un nouveau post dans myBlogdb et rediriger le client vers /
        const thisdata = new Post({
         titre: req.body.titre,
         auteur: req.body.auteur,
         resume: req.body.resume,
         content: req.body.content
         
     })
     async function main(thisdata) {
     
         const { MongoClient } = require('mongodb');
         const client = new MongoClient(process.env.DB_URI)
         await client.connect();
         const db = client.db('myblog')
         const collection = db.collection('posts')
         await collection.insertOne(thisdata)
     }
     main(thisdata).catch(console.error)
     res.redirect('/')
 }
async function renderaddPost(req,res){
    res.render("editPost")
}
async function editPost(req,res){
    //Recupérer un post definie par son _id et renvoyer au client editPost.pug avec les donnée de ce post
}
async function updatePost(req,res){
    //metre à jour un post et rediriger le client vers ce post
}

async function deletePost(req,res){
    //Suprimer un post et rediriger le client vers /
}

module.exports={getPosts,getPost,addPost,updatePost,editPost,deletePost,renderaddPost}