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

const getById = async ( req, res, next ) => {
    const id = req.params.id
    let manga;
    try {
        manga = await Manga.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!manga) {
        return res.status(404).json({ messsage:"No mangas found!" });
    }
    return res.status(200).json({ manga });

};

const addManga = async (req, res, next) => {
    const { name, author, price, description } = req.body;
    let manga;
    try {
        manga = new Manga({
            name,
            author,
            price,
            description
        });
        //await will save new manga to the databas
        await manga.save();
        
    }
    catch (err) {
        console.log(err);
    }
    if (!manga) {
        return res.status(500).json({ message:'Unable to add' })
    }
    return res.status(201).json({ manga });

}


exports.getById = getById;
exports.getAllMangas = getAllMangas;
exports.addManga = addManga;