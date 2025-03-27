const express = require('express')
const app = express();
const port = 9090;

const bodyParser = require('body-parser');
const qr_code = require('qrcode')
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index',{QR_code:''})
});

//post


//get 
app.get('/download',(req,res)=>{
    res.download(req.query,file_path);
})

app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})