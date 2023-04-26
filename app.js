const express = require('express');
const mongoose = require('mongoose');
const app = express();

// middlewares

app.use('/', (req, res, next) => {
    res.send('starting app');
})
mongoose.connect("mongodb+srv://admin:5OsTiRUViguuQC5h@cluster0.hggsgbm.mongodb.net/specialpotato?retryWrites=true&w=majority"
).then(() => console.log("connected to database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));



//5OsTiRUViguuQC5h