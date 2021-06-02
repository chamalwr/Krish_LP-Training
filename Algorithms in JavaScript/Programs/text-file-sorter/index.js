const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const path = require('path');
const pJson = require('./package.json')
const app = express()
const port = 3000

const FileHandler = require('./function/filehandler')
const Util = require('./function/util')
const Validator = require('./function/validator')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port, () => {
    console.log(`${pJson.name} listening at http://localhost:${port}`)
})

app.post('/upload', (req, res) => {
    let textFile
    let uploadPath
    let separator
    let validator = new Validator()

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    textFile = req.files.textFile
    uploadPath = __dirname + '/files/' + textFile.name

    separator = validator.setSeparator(req.body.separators, req.body.customSeparator)
    let savePromise = textFile.mv(uploadPath, function(err) {
        if (err)
            return res.status(500).send(err);
        res.status(200).redirect(`/sortedNames?fileName=${textFile.name}&separators=${separator}`)
    });
})

app.get('/sortedNames', (req, res) => {
    let fileHandler = new FileHandler()
    let validator = new Validator()
    let fileName = req.query.fileName
    let separator = validator.getSeparator(req.query.separators)
    console.log(separator)

    if (fileName === undefined){
        res.status(404).send("Text File Not Found")
    }

    let peopleData = fileHandler.openFile( __dirname + '/files/' + fileName, separator)
    res.render('nameViewer', {people: peopleData})
})
