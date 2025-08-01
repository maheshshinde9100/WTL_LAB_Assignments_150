const express = require('express')
const router = express.Router()
const User = require("../models/Users");
const mongoose = require('mongoose');
const Users = require('../models/Users');

router.post('/register', async (req,res)=>{
    try{
        const {name,email,age,role} = req.body;
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({ msg: "User already exists" })
        }

        user = new User({
            name,
            email,
            age,
            role: role || "viewer"
        })
        
        await user.save();
        res.status(201).json({
            msg: "User created successfully.. " + user
        })

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/', async (req,res)=>{
    try{
        const users = await Users.find().select('name email age role createdAt')
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({
            error:"Server error"
        })
    }
});


module.exports = router;