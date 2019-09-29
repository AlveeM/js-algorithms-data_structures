// Creating a function that reverses a string:
// 'Hi My name is Alvee' should be:
// 'eevlA si eman yM iH'

function reverse(str) {
    // chech input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'please provide a valid input';
    }

    const reversed = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        reversed.push(str[i]);
    }

    return reversed.join('');
}

console.log('reverse 1', reverse('Hi My name is Alvee'));


// Method 2
function reverse2(str) {
    return str.split('').reverse().join('');
}

console.log('reverse 2', reverse2('Hi My name is Alvee'));


// Method 3
const reverse3 = str=> [...str].reverse().join('');

console.log('reverse 3', reverse3('Hi My name is Alvee'));