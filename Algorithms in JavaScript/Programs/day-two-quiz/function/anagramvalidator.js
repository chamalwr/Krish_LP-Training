module.exports = class AnagramValidator {
    validate(wordOne, wordTwo){
        let formattedWordOne = wordOne.toLowerCase();
        let formattedWordTwo = wordTwo.toLowerCase();

        let wordArrayOne = formattedWordOne.split("");
        let wordArrayTwo = formattedWordTwo.split("");

        wordArrayOne.sort();
        wordArrayTwo.sort();

        console.log(wordArrayOne)
        console.log(wordArrayTwo)

        if(wordArrayOne.length === wordArrayTwo.length){
            if(wordArrayOne.join("") === wordArrayTwo.join("")){
                console.log("Anagram")
                return true
            }else{
                console.log("Not an anagram")
                return false
            }
        }else{
            console.log("Cannot be an anagram")
            return false
        }
    }
}
