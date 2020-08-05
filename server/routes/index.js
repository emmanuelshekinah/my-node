const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/get_all_user', async (req, res, next)=>{

    try{
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
        
    }
});


router.get('/get_user/:id', async (req, res, next)=>{

    try{
        let results = await db.one(req.params.id);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
        
    }
});

router.post('/create_user', async (req, res, next)=>{
    console.log(req.body);
   
    // return res.send(req)
    try{
        var userData = {name: req.body.name, email: req.body.email};

        let results = await db.createUser(userData);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
        
    }

    
})

router.put('/update_user', async (req, res, next)=>{
    try{
        var userData = [req.body.name, req.body.email,req.body.id];

        let results = await db.updateUser(userData);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
        
    }
    
})

router.delete('/delete_user/:id', async (req, res, next)=>{
    try{
        let results = await db.removeUser(req.params.id);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
        
    }
    
})

module.exports = router;