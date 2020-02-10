const bubbleSort = (arr, length) => {
    // base case
    if (length <= 1) {
        return;
    }

    // recursive case
    bubbleSort(arr, length - 1);

    // insert last element at its correct position in sorted array
    let lastElement = arr[length - 1]
    let temp = length - 2

    // move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
    while (temp >= 0 && arr[temp] > lastElement) {
        arr[temp + 1] = arr[temp]
        temp -= 1;
    }
    arr[temp + 1] = lastElement
}

const arr = [5, 4, 2, 3, 1];
bubbleSort(arr, arr.length);
console.log(arr);