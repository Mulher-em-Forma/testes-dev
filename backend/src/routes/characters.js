const getCharacters = require('../services/characters/getCharacters');
const getCharacter = require('../services/characters/getCharacter');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    try {
        const result = getCharacters();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/:id', (req, res) => {
    try {
        const result = getCharacter(req.params.id);

        if (!result) res.status(404).json({ message: `character with id ${req.params.id} not found` });

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = router;