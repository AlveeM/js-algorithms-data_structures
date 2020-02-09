const replace = (arr, currentIdx) => {
    if (currentIdx < arr.length) {
        if (arr[currentIdx] < 0) {
            arr[currentIdx] = 0;
        }

    replace(arr, currentIdx + 1);
    }

    return;
}

let arr = [2, -3, 4, -1, -7, 8];
replace(arr, 0);
console.log(arr);