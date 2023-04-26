const Manga = require('../models/Manga');

// this funcion will get all mangas from db

const getAllMangas = async ( req, res, next ) => {
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

// this function will handle retrieving manga by their Ids created from postman

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

// this function will handle adding manga

const addManga = async ( req, res, next ) => {
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

};

//this function will handle updates on manga

const updateManga = async ( req, res, next ) => {
    const id = req.params.id;
    const { name, author, price, description } = req.body;
    let manga;
    try {
        manga = await Manga.findByIdAndUpdate(id, {
            // what should be updated
            name,
            author,
            price,
            description
        });
        manga = await manga.save()
    }
    catch (err) {
        console.log(err);
    }
    if (!manga) {
        return res.status(404).json({ message:"Updating with this Id not available!" });

    }
    return res.status(200).json({ manga });
};

// function for deleting

const deleteManga = async ( req, res, next ) => {
    const id = req.params.id;
    let manga;
    try {
        manga = await Manga.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!manga) {
        return res.status(404).json({ message:"Delete by Id failed!" });
    }
    return res.status(200).json({ message:"Product deleted!" });
}

// export each function after completing each function one by one AFTER checking to see if it updates on postman!!
exports.getById = getById;
exports.getAllMangas = getAllMangas;
exports.addManga = addManga;
exports.updateManga = updateManga;
exports.deleteManga = deleteManga;