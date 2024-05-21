const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians', async (req, res)=>{
    const musicians = await Musician.findAll({});
    res.json(musicians)
})


app.get('/musicians/:id', async (req, res)=>{
    const musician = await Musician.findByPk(req.params.id)
        res.json(musician)
    
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/musicians/:id', async (req, res)=>{
    const musician = await Musician.create(req.body)
    res.json(musician)

})

app.put('/musicians/:id', async (req, res)=>{
    const updatedmusician = await Musician.update(req.body, {where: {id: req.params.id}})
    res.json(updatedmusician)

})

app.delete('/musicians/:id', async (req, res)=>{
    const deletedmusician = await Musician.destroy({where: {id: req.params.id}})
    res.json(deletedmusician)

})





module.exports = app;