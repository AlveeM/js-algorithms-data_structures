const printPascal = testVariable => {
    if (testVariable === 0) {
        return [1];
    } else {
        var result = [1];
        previousResult = printPascal(testVariable - 1);

        for (let i = 0; i < previousResult.length - 1; i++) {
            result.push(previousResult[i] + previousResult[i + 1]);
        }
        result.push(1);
    }
    return result;
}

const testVariable = 5;
console.log(printPascal(testVariable));