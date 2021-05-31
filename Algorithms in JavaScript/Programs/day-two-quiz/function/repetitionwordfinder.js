module.exports = class MissingNumberFinder {
    find(sentence){
        let formattedMessage = sentence.toLowerCase()
        formattedMessage = formattedMessage.replace(/[.,\s]/g, '')
        formattedMessage = formattedMessage.split("")

        let charSummary = new Map();


        for(let i = 0; i < formattedMessage.length; i++){
            let counter = 0;
            for(let j = 0; j < formattedMessage.length; j++){
                if(i === j){
                    continue
                }

                if(formattedMessage[i] === formattedMessage[j]){
                    counter++
                }
            }
            if(counter >= 2){
                charSummary.set(formattedMessage[i], counter)
            }
        }
    }
}
