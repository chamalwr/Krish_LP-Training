module.exports = class Searcher{
     linearSearch (arr, element){
        for (const [index, value] of arr.entries()) {
            if (value === element) {
                console.log(`Element : ${element} found on ${index}`)
                return index
            }else{
                console.log(`Element : ${element} could not found`)
            }
        }
        return -1
    }
}


