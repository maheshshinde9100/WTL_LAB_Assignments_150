const express = require('express')
const router = express.Router()
const User = require("../models/Users");
const mongoose = require('mongoose');
const Users = require('../models/Users');

router.post('/register', async (req,res)=>{
    try{
        const {name,email,password,age,role} = req.body;
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({ msg: "User already exists" })
        }

        user = new User({
            name,
            email,
            password,
            age,
            role: role || "viewer"
        })
        
        await user.save();
        res.status(201).json({
            msg: "User created successfully.. " + user.name
        })

    }catch(err){
        console.error(err.message);
        res.status(500).send({ msg: "Server error" });
    }
});

router.get('/all-users', async (req,res)=>{
    try{
        const users = await Users.find().select('name email age role createdAt')
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({
            error:"Server error"
        })
    }
});


router.post('/login', async (req,res)=>{
    const {email,password} = req.body;
    try{
        if(!email){
            return res.status(400).json({ msg: "Please provide email" });
        }
        if(!password){
            return res.status(400).json({ msg: "Please provide password" });
        }

        const user = await Users.findOne({ email });
        if(!user){
            return res.status(400).json({ msg: "Invalid Username" });
        }
        if(user.password!== password){
            return res.status(400).json({ msg: "Invalid Password" });
        }

        console.log('logged in succesfully')
        return res.status(200).json({msg:'login succesful'});
    }
    catch(err){
        console.error(err.message);
        res.status(500).send({msg : 'server error'});
    }
})

module.exports = router;