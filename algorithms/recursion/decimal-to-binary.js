const decimalToBinary = num => {
    if (num <= 1) {
        return String(num);
    } else  {
        return decimalToBinary(Math.floor(num / 2)) + decimalToBinary(num % 2);
    }
}

console.log(decimalToBinary(11));