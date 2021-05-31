module.exports = class SortingUtil {
    search(arr, element) {
        let firstIndex = 0;
        let lastIndex = arr.length - 1;

        return this.binarySearcher(arr, firstIndex, lastIndex, element)
    }

    binarySearcher(arr, firstIndex, lastIndex, element){
        while (firstIndex <= lastIndex) {
            let middleIndex = firstIndex + Math.floor((lastIndex - firstIndex) / 2);

            if (element === arr[middleIndex]){
                return `Element : ${arr[middleIndex]} found on ${middleIndex}th index`
            }

            if (element < arr[middleIndex]) {
                lastIndex = middleIndex - 1;
            } else {
                firstIndex = middleIndex + 1;
            }
        }
        return -1
    }
}
