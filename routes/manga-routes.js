const express = require('express');
const router = express.Router();
const Product = require("../models/manga")

router.get("/", async (req, res, next) => {
    // route will handle all of the manga
    let manga;
    try {
        manga = await manga.find();
        
    } catch (err) {
        console.log(err);
    }
    if (!manga) {
        return res.status(404).json({ message:'No mangas found!' })
    }
});