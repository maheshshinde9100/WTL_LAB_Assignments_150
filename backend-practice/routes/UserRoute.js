const express = require('express')
const router = express.Router()
const User = require("../models/Users")

router.post('/', async (req,res)=>{
    try{
        const {name,email,age} = req.body;
        let user = User.findOne({email})
        if(user){
            return res.status(400).json({
                msg: "User already exists"
            })
        }

        user = new User({
            name,
            email,
            age,
            role:"Admin"
        })
        
        await user.save();
        res.status(201).json({
            msg:"User created successfully.. "+user
        })
        
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
