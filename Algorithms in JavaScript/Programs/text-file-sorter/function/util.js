module.exports = class Util {
    nameSort(data){
        let processedData = data.toString()
        console.log(processedData)

        processedData = processedData.split("\n").sort();
        console.log(processedData)

        return processedData
    }
}
