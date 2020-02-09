const count = (arr, num) => {
    if (arr.length === 0) {
        return 0;
    } else if (arr[0] === num) {
        return 1 + count(arr.slice(1), num);
    } else {
        return 0 + count(arr.slice(1), num);
    }
}

console.log(count([1, 2, 1, 4, 5, 1], 1));