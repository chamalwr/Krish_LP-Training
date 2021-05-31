module.exports = class SortingUtil{
    breakArray(arr){
        if (arr.length <= 1) {
            return arr;
        }

        let firstIndex = 0;
        let lastIndex = (arr.length - 1)
        let middleIndex = Math.round((firstIndex + lastIndex) / 2);

        let leftArray = this.breakArray(arr.slice(0, middleIndex));
        let rightArray = this.breakArray(arr.slice(middleIndex, arr.length));

        return this.merge(leftArray, rightArray);
    }

     merge(leftArray, rightArray) {
        let result = [];
        while (leftArray.length > 0 && rightArray.length > 0){
            if(leftArray[0] < rightArray[0]){
                result.push(leftArray.shift())
            }else{
                result.push(rightArray.shift())
            }
        }


        if(leftArray.length === 0){
            return result.concat(rightArray)
        }else{
            return result.concat(leftArray)
        }
    }
}
