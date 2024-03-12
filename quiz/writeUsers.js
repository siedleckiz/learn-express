const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router()

router.post('/adduser', (req, res) => {
    let newuser = req.body
    req.users.push(newuser)
    fs.writeFile(path.resolve(__dirname, '../data/users.json'), function(err, data) {
        if (err) console.log('Failed to write'); 
        else console.log('User Saved');
    })
    res.send('done');
});

module.exports = router