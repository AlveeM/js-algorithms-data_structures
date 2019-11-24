function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);

        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

function pivot(arr, start=0, end=arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

function swap(arr, firstIdx, secondIdx) {
    [arr[firstIdx], arr[secondIdx]] = [arr[secondIdx], arr[firstIdx]];
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));