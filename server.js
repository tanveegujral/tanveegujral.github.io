const express = require('express')
const app = express()
const path    = require("path");
const fs = require('fs');
app.listen(3000, () => console.log('Server running on port 3000'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/getIp',function(req, res, next) {
    console.log('User-Agent: ' + req.headers);
    var data = {
        date : new Date(),
        userAgent : req.headers['user-agent'],
        ip : req.headers['x-forwarded-for'] || req.connection.remoteAddress
    }
    fs.appendFile('logs.json', JSON.stringify(data)+'\n', function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.json({success:0});
    });
   // res.sendFile(path.join(__dirname+'/index.html'));
    
  });

