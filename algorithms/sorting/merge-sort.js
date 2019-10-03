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
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const result = mergeSort(numbers);
console.log(result);