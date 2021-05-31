module.exports = class MissingNumberFinder {

    find(arr){
        let newArray = []
        let missingNumbers = []
        let summary = []

        for(let i = 0; i < arr.length; i++){
            let currentNumber = arr[i];
            let nextNumber

            if ((currentNumber + 1) === arr[arr.length - 1]) {
                nextNumber = arr[arr.length - 1]
            }else{
                nextNumber = arr[i + 1]
            }

            if(nextNumber - currentNumber === 1){
                newArray.push(currentNumber)
            }else{
                newArray.push(currentNumber)
                let difference = nextNumber - currentNumber
                for(let j = 1; j < difference; j++){
                    newArray.push(currentNumber + j)
                    missingNumbers.push(currentNumber + j)
                }
            }
        }
        summary.push("Reconstructed Array : " + newArray);
        summary.push("Missing Numbers : " + missingNumbers)
        return summary
    }
}
