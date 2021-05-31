# NodeJS Questions

## 1. Anagram Validator

When two words are given it checks whether it is an anagram or nor

```sh
POST http://localhost:3000/anagram
```

Response Body Should be

```sh
{
    "wordOne" : "SILENT",
    "wordTwo" : "LISTEN"
}
```
Output will be like this

```sh
SILENT and LISTESN are not anagrams
```

## 2. Largest 'N'th Number Finder

When a number array is given with the position it will output what is the larget number in 'n' position

```sh
POST http://localhost:3000/largestNumber
```

Response Body Should be

```sh
{
    "arr" : [10, 34, 29, 100, 2, 0, 292, 27, 23],
    "pos" : 3
}
```

Output will be like this

```sh
3th largest number is 29
```

## 3. Missing Sequence Finder

When an number array is given there might be situation where the sequence is not as expected this fill the missing numbers and reconstruct it and return the missing numbers as a seperate array

```sh
POST http://localhost:3000/missingNumber
```

Response Body Should be

```sh
{
    "arr" : [1, 2, 3, 5, 7, 10, 15]
}
```

Output will be like this

```sh
[
    "Reconstructed Array : 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15",
    "Missing Numbers : 4,6,8,9,11,12,13,14"
]
```

## 3. Repetition Character Find

When a sentence is given to the function it will calculate what are the words that keeps repeating and give a summary of the results

```sh
POST http://localhost:3000/repetition
```

Response Body Should be

```sh
{
    "sentence" : "But now in this valley of Humiliation poor Christian was
    hard put to it; for he had gone but a little way before he spied foul 
    fiend coming over the field to meet him; his name is Apollyon. Then did 
    Christian begin to be afraid, and to cast in his mind whether to go back
    or stand his ground."
}
```

Output will be like this
```sh
{
    "b": 5,
    "u": 5,
    "t": 20,
    "n": 16,
    "o": 20,
    "w": 3,
    "i": 24,
    "h": 15,
    "s": 10,
    "a": 16,
    "l": 8,
    "e": 19,
    "y": 2,
    "f": 6,
    "m": 5,
    "p": 3,
    "r": 10,
    "c": 4,
    "d": 11,
    "g": 4
}
```


