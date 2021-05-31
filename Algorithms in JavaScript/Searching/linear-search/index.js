const express = require('express')
const bodyParser = require('body-parser')
const Searcher = require('./func/searcher')
const pJson = require('./package.json');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to Linear Search Application')
})

app.listen(port, () => {
    console.log(`${pJson.name} listening at http://localhost:${port}`)
})

app.post('/arr', (req, res) => {
    let searcher = new Searcher();
    let arr = req.body.numberArray;
    let elem = req.body.number;
    let index = searcher.linearSearch(arr, elem)
    if (index !== -1){
        res.send("Found Index is : " + index)
    }else{
        res.send("Element could not found on the array")
    }
})
