const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const app = express();

//app.use(cors());

async function connect() {
    //mongoose.connect("mongodb://db:27017/greeting");
    mongoose.connect("mongodb://localhost:27017/greeting");
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', async () => {
        console.log('MongoDB connection success')
    });
}
connect().then().catch(console.error.bind(console, 'MongoDB error'));

async function getGreeting() {
    let col = await mongoose.connection.db.collection("phrase");
    let rand = Math.floor(Math.random() * 5);
    let query = await col.findOne({id:rand});
    return query['greeting'].toString();
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/greeting', async (req, res) => {
    const greeting = await getGreeting();
    res.send(greeting);
})

app.listen(port,'0.0.0.0' , () => { console.log(`Listening on port ${port}`); });