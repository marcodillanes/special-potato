const express = require('express');
const router = express.Router();
const Manga = require("../models/Manga");
const mangasController = require('../controllers/mangas-controller');

router.get("/", mangasController.getAllMangas);

module.exports = router;