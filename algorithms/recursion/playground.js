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

function collectOddValues(arr) {
    let result = []

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !=== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }
}