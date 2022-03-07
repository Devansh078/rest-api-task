const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }
    //res.send('We are on post');
});
//router.get('/specific',(req,res)=>{
//res.send('Specific Posts');
//});
router.post("/", async (req,res)=>{
     //console.log(req.body);
     const post = new Post({
     country:req.body.country,
     rank:req.body.rank,
     population:req.body.population});

      try{
     const savePost = await post.save();
     res.json(savePost);
     }catch(err){
     res.json({message: err});
     }
 });
// router.get('/:postId',async(req,res)=>{
 //try{
 //const post = await Post.findById(req.params.postId);
 //res.json(post);
 //}
 //catch(err)
 //{
 //res.json({message:err});
 //}});
 router.get('/:postId',async (req,res)=>{
try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
    res.json({message:err});}
 });

 //Delete Post
 router.delete('/:postId',async (req,res)=>{
 try{
     const removePost = await Post.remove({_id: req.params.postId});
     res.json(removePost);
 }
 catch(err){
     res.json({message:err});
 }
 });
//Update a post
router.patch('/:postId',async (req,res)=>{
try{
    const updatePost = await Post.updateOne(
    {_id:req.params.postId},
    {$set: {rank:req.body.rank}});
    res.json(updatePost);
    }catch(err){
    res.json({message:err});}
});

module.exports = router;
