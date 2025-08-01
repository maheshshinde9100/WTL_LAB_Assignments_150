const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const PORT = 5000;

const MongoURI = "mongodb://localhost:27017/practice-nodejs";

const app = express()

app.use(express.json())

app.use(cors)

mongoose.connect(MongoURI)
    .then(() => console.log("Mongodb connected successfully..: "))
    .catch(err => console.log("Mongodb connection error..: ",err))

// API routes    
app.use('/api/user',require("./routes/UserRoute"))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
