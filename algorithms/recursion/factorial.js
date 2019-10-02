// Write two functions that finds the factorial of any number. One should use recursive, the other should use a for loop

// TC: O(n)
function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }

    return number * findFactorialRecursive(number - 1);
}
console.log('recursive ', findFactorialRecursive(5));

// TC: O(n)
function findFactorialIterative(number) {
    let result = 1;
    for (let i=2; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log('iterative', findFactorialRecursive(5));