const express = require('express')
const bodyParser = require('body-parser')
const pJson = require('./package.json');
const AnagramValidator = require('./function/anagramvalidator')
const LargestNumberFinder = require('./function/largestnfinder')
const MissingNumberFinder = require('./function/missingnumberfinder')
const RepetitionWordFinder = require('./function/repetitionwordfinder')
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

app.post('/anagram', (req, res) => {

   let anagramValidator = new AnagramValidator()
   let wordOne = req.body.wordOne;
   let wordTwo = req.body.wordTwo;

   let isAnagram = anagramValidator.validate(wordOne, wordTwo)

    if (isAnagram){
        res.send(`${wordOne} and ${wordTwo} are anagrams`)
    }else{
        res.send(`${wordOne} and ${wordTwo} are not anagrams`)
    }
})

app.post('/largestNumber', ((req, res) => {
    let largestNumberFinder = new LargestNumberFinder()
    let numberArray = req.body.arr;
    let position = req.body.pos;

    let largestNth = largestNumberFinder.find(numberArray, position)

    res.send(`${position}th largest number is ${largestNth}`)
}))

app.post('/missingNumber', (req, res) => {
    let missingNumberFinder = new MissingNumberFinder();
    let numberArray = req.body.arr;

    let status = missingNumberFinder.find(numberArray)

    res.send(status)
})

app.post('/repetition', (req, res) => {
    let repetitionWordFinder = new RepetitionWordFinder()
    let sentence = req.body.sentence

    let summary = repetitionWordFinder.find(sentence)

    res.send(JSON.stringify(summary))
})
