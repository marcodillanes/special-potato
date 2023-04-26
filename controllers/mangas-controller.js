const Manga = require('../models/Manga');


const getAllMangas = async (req, res, next) => {
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
};

exports.getAllMangas = getAllMangas;