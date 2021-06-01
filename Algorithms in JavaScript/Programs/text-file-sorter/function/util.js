module.exports = class Util {

     toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    nameSort(data){
        let processedData = data.toString()
        processedData = this.toTitleCase(processedData)
        processedData = processedData.split("\n").sort()
        return processedData
    }
}
