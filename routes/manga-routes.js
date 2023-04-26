const express = require('express');
const router = express.Router();
const Manga = require("../models/Manga");

router.get("/", async (req, res, next) => {
    // route will handle all of the manga
    let mangas;
    try {
        mangas = await Manga.find();
        
    } catch (err) {
        console.log(err);
    }
    if (!mangas) {
        return res.status(404).json({ message:'No mangas found!' })
    }
    return res.status(200).json({ mangas });
});

module.exports = router;