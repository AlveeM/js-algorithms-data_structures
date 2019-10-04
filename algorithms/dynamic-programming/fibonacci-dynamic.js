// memoization
function fibonacciDynamic() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

// bottom up
function fibonacciDynamic2(n) {
    let result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result.push(result[i-2] + result[i-1]);
    }
    return answer.pop();
}

const fib = fibonacciDynamic();
console.log(fib(10));