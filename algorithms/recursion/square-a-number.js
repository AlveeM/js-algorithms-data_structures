const findSquare = num => {
    if (num === 0) {
        return 0;
    } else {
        return findSquare(num - 1) + (2 * num) - 1;
    }
}

console.log(findSquare(5))