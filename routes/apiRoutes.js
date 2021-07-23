const fs = require("fs");
const router = require('express').Router();
let DB = require('../db/db.json');

router.get('/notes', (req, res) => {
    DB = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))

    res.json(DB);
});
router.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000),
    }
    DB.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(DB))

    res.json(DB);
});
router.get('/notes/:id', (req, res) => {
    let notes = JSON.parse(data);
    res.json(notes[req.params.id]);
});
router.delete('/notes/:id', (req, res) => {
    notes.splice(req.params.id);
    res.json(DB);

});

module.exports = router;