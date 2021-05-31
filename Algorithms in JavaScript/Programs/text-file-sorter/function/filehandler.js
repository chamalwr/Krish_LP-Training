fs = require('fs')
const Utils = require('./util')

module.exports = class FileHandler {

    openFile(fileName){
        let fileData;
        let processedData;

        let util = new Utils()

        fs.readFile(fileName, 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            fileData = data
            processedData = util.nameSort(fileData)
        });
        return processedData
    }
}
