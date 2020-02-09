const printPascal = row => {
    if (row === 0) {
        return [1];
    } else {
        var result = [1];
        previousResult = printPascal(row - 1);

        for (let i = 0; i < previousResult.length - 1; i++) {
            result.push(previousResult[i] + previousResult[i + 1]);
        }
        result.push(1);
    }
    return result;
}

const row = 5;
console.log(printPascal(row));