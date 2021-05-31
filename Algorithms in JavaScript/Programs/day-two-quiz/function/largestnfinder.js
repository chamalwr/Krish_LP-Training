module.exports = class LargestNthFinder {
    find(arr, n){
        arr.sort((a, b) => b - a);
        return arr[n]
    }
}
