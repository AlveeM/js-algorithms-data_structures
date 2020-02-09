const sumDigits = str => {
    if (str === "") {
        return 0;
    } else {
        return Number(str[0]) + sumDigits(str.substring(1));
    }
}

console.log(sumDigits("345"));