const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = 5000;
app.use(cors())
app.use(express.json())

const mongoURI = 'mongodb://localhost:27017/practice-nodejs';

async function connectToDB(){
    try{
        await mongoose.connect(mongoURI)
        console.log('Connected to MongoDB ✌️')

    }catch(err){
        console.log('failed to connect to MongoDB ❌')
    }
}
connectToDB();

app.use('/api',require('./routes/HealthCheck'))
app.use('/api/users', require('./routes/UserRoute'))

app.listen(PORT, () => console.log(`server is running on ${PORT}`));