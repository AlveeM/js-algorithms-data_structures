const firstIndex = (arr, target, currentIndex) => {
    if (arr.length === currentIndex) {
        return -1;
    }

    if (arr[currentIndex] === target) {
        return currentIndex;
    }

    return firstIndex(arr, target, currentIndex + 1);
}

let arr = [9, 8, 1, 8, 1, 7];
let target = 8;
let currentIndex = 0;

console.log(firstIndex(arr, target, currentIndex));