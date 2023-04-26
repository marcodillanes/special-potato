const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/manga-routes');
const app = express();

// middleware

// this middleware handles converting the json throughout the server 
app.use(express.json());

// localhost:5000/manga 

app.use("/mangas", router);

mongoose.connect("mongodb+srv://admin:5OsTiRUViguuQC5h@cluster0.hggsgbm.mongodb.net/specialpotato?retryWrites=true&w=majority"
).then(() => console.log("connected to database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));



