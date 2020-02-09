const balanced = (arr, startIdx = 0, currentIdx = 0) => {
    // base case 1 and 2
    if (startIdx === arr.length) {
        return currentIdx === 0;
    }

    // base case 3
    // a closing parenthesis did not find its corresponding opening parenthesis
    if (currentIdx < 0) {
        return false;
    }

    // recursive case 1
    if (arr[startIdx] === "(") {
        return balanced(arr, startIdx + 1, currentIdx + 1);
    // recursive case 2
    } else if (arr[startIdx] === ")") {
        return balanced(arr, startIdx + 1, currentIdx - 1);
    } else {
        return false
    }
}

const arr1 = ["(", "(", ")", ")", "(", ")"];
const arr2 = ["(", "(", ")"]
console.log(balanced(arr1));
console.log(balanced(arr2));