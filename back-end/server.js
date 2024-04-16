const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const Users = require('./db/user');

connectDB();

//Parsing JSON - Middleware
app.use(express.json());

//REGISTRATION
app.post('/register',async(req,res) => {
    try{
        const {username, password} = req.body;
        const user = new Users({username,password});
        await user.save();
        res.status(201).json({message:'Registration Successful'});
    }
    catch(error){
        res.status(500).json({error:"Registration Failed"});
    }
})

//LOGIN
app.post('/login',async(req,res) => {
    try{
        const {username, password} = req.body;
        const user = await Users.findOne({username});

        if(!user){
            return res.status(401).json({error:'Invalid Username/Password'});
        }
        if(user.password !== password){
            return res.status(401).json({error:'Invalid Username/Password'});
        }

        res.status(200).json({message:'Login Successful'});
    }
    catch(error){
        res.status(500).json({error:'Login Failed'});
    }
})

app.listen(port,() => {
    console.log("Server is running on Port:8000");
});