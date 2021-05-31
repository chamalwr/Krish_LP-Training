function search(arr, element) {
    arr.sort((a, b) => a - b);

    let firstIndex = 0;
    console.log("First Index : " + firstIndex)
    let lastIndex = (arr.length - 1)
    console.log("Last Index : " + lastIndex)
    let middleIndex = Math.round((firstIndex + lastIndex) / 2);
    console.log("Middle Index : " + middleIndex)

    binaryTreeSearcher(arr, firstIndex, middleIndex, lastIndex, element);
}

function binaryTreeSearcher(arr, firstIndex, middleIndex, lastIndex, element){

    if (lastIndex < firstIndex){
        console.log("Item Not Found in the Array!")
    }

    if (arr[middleIndex] === element){
        console.log(arr[middleIndex])
        console.log("Found!")
    }else if (arr[middleIndex] > element){
        binaryTreeSearcher(arr, firstIndex, middleIndex -1, lastIndex, element)
    }else if (arr[middleIndex] < element){
        binaryTreeSearcher(arr, middleIndex + 1 , lastIndex, element)
    }
}


let numbers = [1, 3, 4, 6, 8, 9, 20, 20, 77, 84, 85, 89, 90]

search(numbers, 85)

