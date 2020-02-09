const recursiveLength = str => {
    if (str === "") {
        return 0;
    } else {
        return 1 + recursiveLength(str.substring(1));
    }
}

console.log(recursiveLength("hello"));