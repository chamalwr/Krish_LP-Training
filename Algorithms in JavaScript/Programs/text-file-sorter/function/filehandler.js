fs = require('fs')
const Utils = require('./util')

module.exports = class FileHandler {

    openFile(fileName){
        let fileData;
        let util = new Utils()
        fileData =  fs.readFileSync(fileName, 'utf8')
        return util.nameSort(fileData)
    }

}
