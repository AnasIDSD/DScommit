const express=require("express")
const {getPosts,getPost,addPost,updatePost,editPost,deletePost,renderaddPost}=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.get('/', getPosts);
router.get('/addpost',renderaddPost);
router.post('/addpost', addPost);
router.get("/post/:id", getPost)
router.get("/delete/:id", deletePost)
router.get("/update/:id", editPost)
router.post("/update", updatePost)


module.exports=router