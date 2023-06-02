const express = require('express')
const fs = require('fs')
const path = require('path');
var app = express()
var crypto = require('crypto')
const port = 5001

app.use(express.json())

app.post("/checksum-count", (req,res) => {

    const secondFile= req.body.file
    const secondFilePath = path.join(__dirname,`home/${secondFile}`)

        function checksumCalculator(str, algorithm, encoding){
            return crypto
             .createHash(algorithm || 'md5')
             .update(str, 'utf8')
             .digest(encoding || 'hex')
        }
    
    fs.readFile(secondFilePath,'utf-8', (err,data) =>{

        let checksum = checksumCalculator(secondFile)
        res.json({
            "file": secondFile,
            "checksum" :checksum 
        })
    })

})
app.listen(port)
console.log("App is running on port: "+port)