const express = require("express");
const cors = require("cors");

const app = express();
const {getCompliment, getFortune, createAdvice, deleteAdvice} = require('./controller')

app.use(cors());

app.use(express.json()); 

// GET METHODS
app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)

//POST METHOD
app.post("/api/advice", createAdvice)

//DELETE METHOD
app.delete("/api/advice", deleteAdvice)

//PUT METHOD

app.listen(4000, () => console.log("Server running on 4000"));
