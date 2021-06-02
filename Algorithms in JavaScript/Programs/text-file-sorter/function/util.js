module.exports = class Util {

     toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    removeSpaces(arr){
         let spaceLessArray = []
         for(let i = 0; i < arr.length; i++){
             if (arr[i].length <= 1){
                 continue
             }else {
                 spaceLessArray.push(arr[i])
             }
         }
         return spaceLessArray;
    }

    nameSort(data, separator){
        let processedData = data.toString()
        processedData = this.toTitleCase(processedData)
        processedData = processedData.split(separator)
        processedData = this.removeSpaces(processedData).sort()
        return processedData
    }
}
