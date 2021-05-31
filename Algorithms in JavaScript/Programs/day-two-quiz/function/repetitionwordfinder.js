module.exports = class MissingNumberFinder {

    mapToObj(map){
        const obj = {}
        for (let [k,v] of map)
            obj[k] = v
        return obj
    }

    find(sentence) {
        let charSummary = new Map();
        let formattedMessage = sentence.toLowerCase()
        formattedMessage = formattedMessage.replace(/[.,\s]/g, '')
        console.log(formattedMessage)
        formattedMessage = formattedMessage.split("")

        console.log(formattedMessage)



        for (let i = 0; i < formattedMessage.length; i++) {
            let counter = 0;
            for (let j = 0; j < formattedMessage.length; j++) {
                if (i === j) {
                    continue
                }

                if (formattedMessage[i] === formattedMessage[j]) {
                    counter++
                }
            }
            if (counter >= 2) {
                charSummary.set(formattedMessage[i], counter)
            }
        }

        return this.mapToObj(charSummary)
    }
}
