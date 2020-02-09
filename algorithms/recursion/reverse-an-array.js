const reverse = arr => {
    if (arr.length < 1) {
        return [];
    } else if (arr.length === 1) {
        return arr;
    } else {
        return [arr[arr.length - 1]].concat(reverse(arr.slice(0, arr.length - 1)));
    }
}

console.log(reverse([1, 2, 3, 4]));