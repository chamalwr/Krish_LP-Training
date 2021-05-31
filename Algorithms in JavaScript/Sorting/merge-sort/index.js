const express = require('express')
const bodyParser = require('body-parser')
const SortingUtil = require('./func/sortingutil')
const pJson = require('./package.json');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`${pJson.description} by ${pJson.name}`)
})

app.listen(port, () => {
    console.log(`${pJson.name} listening at http://localhost:${port}`)
})

app.post('/sort', (req, res) => {
    let sortingUtil = new SortingUtil();
    let arrayToBeSorted = req.body.arr
    let sortedArray = sortingUtil.breakArray(arrayToBeSorted)
    res.send(`Sorted :  ${sortedArray}`)
})
