const router = require('express').Router();
const path = require( 'path');



// Defines the route that sends 'notes.html" as a res
router.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname,'../public/notes.html')); 
});

router.get ('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html')); 
});

module. exports = router;