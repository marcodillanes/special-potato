const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/manga-routes');
const app = express();
const cors = require('cors');

// middleware

// this middleware handles converting the json throughout the server 
app.use(express.json());
// cors helps with security getting db from being blocked from sending requests to servers
app.use(cors());

// localhost:5000/manga 

app.use("/mangas", router);

mongoose.connect("mongodb+srv://admin:5OsTiRUViguuQC5h@cluster0.hggsgbm.mongodb.net/specialpotato?retryWrites=true&w=majority"
).then(() => console.log("connected to database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));



