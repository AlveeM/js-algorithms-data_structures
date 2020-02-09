const average = (arr, currentIdx = 0) => {
    // base case
    if (currentIdx === arr.length - 1) {
        return arr[currentIdx];
    }

    // recursive case 1
    if (currentIdx === 0) {
        return ((arr[currentIdx] + average(arr, currentIdx + 1)) / arr.length);
    }

    // recursive case 2
    return (arr[currentIdx] + average(arr, currentIdx + 1));
}

const arr = [10, 2, 3, 4, 8, 0];
console.log(average(arr));