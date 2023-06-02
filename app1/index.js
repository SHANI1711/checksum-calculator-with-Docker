const express = require('express')
const fs = require('fs')
const axios = require('axios');
const path = require('path');
const port = 5000
var app = express()
app.use(express.json())

app.post("/checksum", (req,res)=>{

    const file = req.body.file
    fs.readFile(path.join(__dirname,`home/${file}`), 'utf-8', (err,data) =>{
        
        if(!file.trim()){
            res.json({
                "file" : file,
                "error": "Invalid JSON input."
            })
        }
        else if(!fs.existsSync(path.join(__dirname,`home/${file}`)))
        {
            res.json({
                "file": file,
                "error": "File not found."
            })
        }
        else{
            async function sendRequest(){
                let response = await axios.post('http://container2:5001/checksum-count',{file})
                let data = response.data;
                res.json(data)
            }
            sendRequest();
        }
    } )
})

app.listen(port)
console.log("App is running on port: "+port)