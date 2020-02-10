const binarySearch = (arr, target) => {
    let length = arr.length;
    let middleIndex = Math.floor(length / 2);
    let middle = arr[middleIndex];

    //  base case
    if (middle === target) {
        return middleIndex;
    }

    // recursive case
    if (length > 1) {
        if (middle > target) {
            return binarySearch(arr.slice(0, middleIndex), target);
        } else {
            return binarySearch(arr.slice(middleIndex, length), target);
        }
    }

    return -1;
}

var arr = [1, 2, 3, 4, 5, 6];
var target = 4;
console.log(binarySearch(arr, target));