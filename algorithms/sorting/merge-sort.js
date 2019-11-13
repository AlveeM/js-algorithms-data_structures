const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// TC: O(n log n)
// SC: O(n)
function mergeSort (arr) {
  if (arr.length === 1) {
    return arr
  }
  // Split Array into right and left
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge( mergeSort(left), mergeSort(right) )
}

function merge(left, right){
    const result = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            result.push(left[leftIdx]);
            leftIdx++;
        } else {
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }

    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

const result = mergeSort(numbers);
console.log(result);