const express = require('express');
const router = express.Router();
const Manga = require("../models/Manga");
const mangasController = require('../controllers/mangas-controller');

//route for getting all manga

router.get("/", mangasController.getAllMangas);

// route for adding manga

router.post('/', mangasController.addManga);

// router for getting product through id created from postman get 

router.get('/:id', mangasController.getById);

// update route is going to be a put route

router.put('/:id', mangasController)

module.exports = router;