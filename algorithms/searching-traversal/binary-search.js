function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1 ;
    let middle = Math.ceil((start + end) / 2);
    while (arr[middle] !== target && start <= end) {
        if (target < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.ceil((start + end) / 2);
    }
    return arr[middle] === target ? middle : -1;
}