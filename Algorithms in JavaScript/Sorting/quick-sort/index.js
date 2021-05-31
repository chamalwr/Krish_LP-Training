const express = require('express')
const bodyParser = require('body-parser')
const QuickSort = require('./func/quicksort')
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
    let quickSort = new QuickSort();
    let arrayToBeSorted = req.body.arr
    let sortedArray = quickSort.sort(arrayToBeSorted)
    res.send(`Sorted Using Quick Sort:  ${sortedArray}`)
})
