//Initiating express
const express=require('express');

//creating a body parser to make sure that whenever user sends some json data in body request succesfully gets passed
const bodyParser = require('body-parser');
//generating a random id from crypto package, this id we will use while creation of new post
        //function name         //package name
const { randomBytes } = require ('crypto');
const cors = require('cors');

const app=express();
app.use(bodyParser.json());
app.use(cors());



//object for storing all different posts in temp memory
const post={};

//whenever someone calls a get request for post, we send all the posts 
app.get('/posts',(req, res)=>{
    res.send(posts);

});


app.post('/posts',(req, res)=>{
    //Generating a random id
    const id=randomBytes(4).toString('hex');

    const{title}=req.body;

    posts[id]={
        id, title
    };

    res.status(201).send(posts[id]);

});


//Make sure that express app listens on very specific part only
        //port number
app.listen(4000,()=>{
    console.log('listening on 4000');
})