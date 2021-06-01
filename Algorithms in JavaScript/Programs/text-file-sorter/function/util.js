module.exports = class Util {
    nameSort(data){
        let processedData = data.toString()
        processedData = processedData.split("\n").sort();
        return processedData
    }
}
