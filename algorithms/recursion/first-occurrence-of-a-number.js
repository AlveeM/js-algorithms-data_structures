const firstIndex = (arr, testVariable, currentIndex) => {
    if (arr.length === currentIndex) {
        return -1;
    }

    if (arr[currentIndex] === testVariable) {
        return currentIndex;
    }

    return firstIndex(arr, testVariable, currentIndex + 1);
}

let arr = [9, 8, 1, 8, 1, 7];
let testVariable = 8;
let currentIndex = 0;

console.log(firstIndex(arr, testVariable, currentIndex));