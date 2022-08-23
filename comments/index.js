const express=require('express');
const bodyParser = require('body-parser');
const{randomBytes}= require('crypto');
const cors= require('cors');

 //Create express application
 const app=express();
 //Associate body parser with application
 app.use(bodyParser.json());
 app.use(cors());


//Creating object for storing comments in memory data structure
const commentsByPostId={};



 //open together our 2 route handlers
 app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostId[req.params.id] || []);

 });

 app.post('/posts/:id/comments',(req,res)=>{

    //Generate a new random comment id
    const commentId= randomBytes(4).toString('hex');
    //Will pull out the content property that is provided by incoming request
    const{content}=req.body;

    const comments=commentsByPostId[req.params.id] || [];
    //It will give 2 results
    //1.inarray
    //2. undefined-if we never had a comment associated with the post.//  [] give me a empty array

    //Now pushing the new comment that we are trying to create with comment array
    comments.push({id: commentId, content});

    commentsByPostId[req.params.id]=comments;

    res.status(201).send(comments);

 });

 //Lets make sure that our express application listens on some port 
 //on port 400, we already have another service listening so we need to put some other port
 app.listen(4001,()=>{
    console.log('Listening on 4001');
 });

 //Now implementation for getting all comments with certain postid

 //Implementation for creating a new comment /post

 //We will store all the comments in inmemory data struture

 //For each post ID we are going to have a array of comments assoicated with it

 //Lastly open pacakage.json file and define this script inside that