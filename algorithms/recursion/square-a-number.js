const findSquare = testVariable => {
    if (testVariable === 0) {
        return 0;
    } else {
        return findSquare(testVariable - 1) + (2 * testVariable) - 1;
    }
}

console.log(findSquare(5))