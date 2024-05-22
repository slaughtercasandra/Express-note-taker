const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const path = require("path"); // Import path module

router.get('/notes', (req, res) => {
    let n = fs.readFileSync("./develop/db.json", "utf8");
    console.log(n);
    n = JSON.parse(n);
    res.json(n);
});

router.post('/notes', (req, res) => {
    let n = fs.readFileSync("./develop/db.json", "utf8");
    console.log(n);
    n = JSON.parse(n);

    let userNote = {
        title: req.body.title,
        body: req.body.body, // Corrected here
        id: uuidv4()
    }
    n.push(userNote);
    fs.writeFileSync("./develop/db.json", JSON.stringify(n), (err) => { // Corrected here
        if (err) throw err; // Throw error if encountered
        res.json(n);
    });
});

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id; // No need to parseInt
    fs.readFile(path.join(__dirname, './develop/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== noteId);
        fs.writeFile(path.join(__dirname, './develop/db.json'), JSON.stringify(notes), err => {
            if (err) throw err;
            res.json({ success: true }); // Corrected spelling of success
        });
    });
});

module.exports = router;
