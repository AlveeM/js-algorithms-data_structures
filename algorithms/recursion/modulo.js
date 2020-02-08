const mod = (dividend, divisor) => {
    if (divisor === 0) {
        console.log("divisor cannot be 0");
        return undefined;
    }

    if (dividend < divisor) {
        return dividend;
    } else {
        return mod(dividend - divisor, divisor);
    }
}

let dividend = 10;
let divisor = 4;
console.log(mod(dividend, divisor));