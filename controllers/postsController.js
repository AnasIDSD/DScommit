const pug = require('pug');
const env = require('dotenv')
const Post=require("../models/post/postModel")
const user=require("../models/user/userModel")


async function getPosts(req,res){
    env.config({ path:'.env' })
    const thispost = main().catch(console.error)
    async function main() {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient("mongodb+srv://myblog:31BAakJZVotfPWll@cluster0.ybqupzv.mongodb.net/?retryWrites=true&w=majority")
    await client.connect();
    const db = client.db('myblog')
    const coll = db.collection('posts')
    const post = await coll.find().toArray()
    return post
    }
    res.render('index', { thispost: await thispost})}

async function getPost(req,res){
    //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
}

async function addPost(req,res){
   //Créer un nouveau post dans myBlogdb et rediriger le client vers /
}
async function renderaddPost(req,res){

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