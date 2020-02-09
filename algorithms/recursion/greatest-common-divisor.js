const gcd = (num1, num2) => {
    if (num1 === num2) {
        return num1;
    }

    if (num1 > num2) {
        return gcd(num1 - num2, num2);
    } else {
        return gcd(num1, num2 - num1);
    }
}

let num1 = 6;
let num2 = 9;

console.log(gcd(num1, num2));