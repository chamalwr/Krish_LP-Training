const express = require('express')
const bodyParser = require('body-parser')
const BinarySearch = require('./func/binarysearch')
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

app.post('/search', (req, res) => {
    let binarySearch = new BinarySearch()

    let arr = req.body.arr
    let elem = req.body.elem

    let status = binarySearch.search(arr, elem)

    if (status !== undefined){
        res.send(status)
    }else{
        res.send('Element Could Not be found!')
    }

})
