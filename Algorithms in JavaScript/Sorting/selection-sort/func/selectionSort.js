module.exports = class SelectionSort {
    sort(arr){
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let currentMinIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[currentMinIndex] > arr[j]) {
                    currentMinIndex = j;
                }
            }
            if (currentMinIndex !== i) {
                let temp = arr[i];
                arr[i] = arr[currentMinIndex];
                arr[currentMinIndex] = temp;
            }
        }
        return arr;
    }
}
