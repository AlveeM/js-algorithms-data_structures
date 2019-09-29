// Given 2 arrays, create a function that lets a user know (true/flase) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// ----------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true;

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

// brute force approach
// Time Complexity O (a*b)
// Space Complexit O(1)
function containsCommonItem(arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
        for (let j=0; j < arr2.length; j++) {
            if (arr[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}


// Method 2 O(a + b)
// Time Complexity: O(a + b)
// Space Complexity: O(a)
// array1 ==> obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }
// array2[index] === Object.properties

function containsCommonItem2(arr1, arr2)
{
    // loop through first array and create object where properties === items in teh array
    let map = {};
    for (let i=0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    // loop through second array and check if item in second array exists in created object
    for (let j=0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }

    return false;
}

console.log(containsCommonItem2(array1, array2));

// Method 2 (more readable)
function containsCommonItem3(arr1, arr2)
{
    return arr1.some(item => arr2.include(item));
}