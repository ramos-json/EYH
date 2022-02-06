var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('index.html');
})
app.listen(5000,()=>{
    console.log("server running");
});