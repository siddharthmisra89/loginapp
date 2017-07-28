const express = require('express')
const bodyParser = require('body-parser');
const app = express()
var path = require("path")
var id = "general"
var pass = "alladin"

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/yoyo', function(req, res){
  if(id == req.body.id && pass == req.body.pass){
    res.send("alladin motherfucker")
  } else{
    res.send("you are HIV alladin")
  }
})


app.use('/hayorabba', express.static(path.join(__dirname, 'appone')))


app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
})
