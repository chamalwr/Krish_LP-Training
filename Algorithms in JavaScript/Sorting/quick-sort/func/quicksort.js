module.exports = class QuickSort {
    sort(arr) {
        let sortedArray = [];

        if (arr.length < 2) {
            return arr;
        }

        let pivot = [arr[0]];
        let leftArray = [];
        let rightArray = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                leftArray.push(arr[i]);
            } else if (arr[i] > pivot) {
                rightArray.push(arr[i]);
            } else {
                pivot.push(arr[i]);
            }
        }

        sortedArray = this.sort(leftArray).concat(pivot, this.sort(rightArray))
        return sortedArray
    }
}
