let counter = 0;
function inception() {
    if (counter > 3) {
        return 'done!';
    }
    counter++;
    inception();
}

function inception2() {
    if (counter > 3) {
        return 'done!';
    }
    counter++;
    return inception();
}

console.log(inception()); // undefined
console.log(inception2()); // 'done'