function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge (left, right) {
    let results = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            results.push(left[leftIdx]);
            leftIdx++;
        } else {
            results.push(right[rightIdx]);
            rightIdx++;
        }
    }

    while (leftIdx < left.length) {
        results.push(left[leftIdx]);
        leftIdx++;
    }

    while (rightIdx < right.length) {
        results.push(right[rightIdx]);
        rightIdx++;
    }

    return results;
}