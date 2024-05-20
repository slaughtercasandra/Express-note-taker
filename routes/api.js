const router =require('express').Router();
const {v4:uuidv4} =require('uuid');
const fs = require("fs");

router.get('/notes', (req, res) =>{ 
    let n = fs.readFileSync("./develop/db.json", "utf8");
    console.log(n);
    n = JSON.parse(n);
    res.json(n);

});

router.post('/notes', (req, res) =>{ 
    let n = fs.readFileSync("./develop/db.json", "utf8");
    console.log(n);
    n = JSON.parse(n);

    let userNote = {
        title: req.body.title,
        body: req.body.title,
        id:uuidv4()
    }
    n.push(userNote);
    fs.writeFileSync("./develop/db.json", JSON.stringify(n), function(e){
        if (e) throw (e);
    })
    res.json(n);

});

module.exports = router;